var itemsPerPage = 100;
var lengthConsole = 33;

var columnsMetadata = require('../Scripts/Metadata/Columns/ColumnsExtJsMetadata');
var modelMetadata = require('../Scripts/Metadata/Model/ModelExtJsMetadata');
var data= require('../Scripts/Dataset/Data');

function cellClick (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
    var detailPanel = Ext.getCmp('detailPanel');
    detailPanel.update('Click: ' + 'Cell: ' + iColIdx + ', Row: ' + iRowIdx + ', Text cell: ' + iCellEl.textContent);
}

function autoSizesColumn(dataview){
    Ext.each(dataview.panel.columns, function(column) {
        if (column.autoSizeColumn  === true)
            column.autoSize();
    })
}


Ext.onReady(function(){

    Ext.define('Assets',{
        extend: 'Ext.data.Model',
        fields: modelMetadata
    });

    Ext.on('resize', function(){
        var height = Ext.getBody().getViewSize().height - lengthConsole;
        Grid.setSize(Ext.getBody().getViewSize().width, height);
    });

    Ext.tip.QuickTipManager.init();

    var Store = Ext.create('Ext.data.Store', {
        model: 'Assets',
        autoLoad: true,
        pageSize: itemsPerPage,
        data : data,
        proxy: {
            type: 'memory',
            enablePaging : true,
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        },
        groupField: 'AssetType'
    });

    var Grid = Ext.create('Ext.grid.Panel', {
        bufferedRenderer: false,
        store: Store,
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: Store,   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }],
        renderTo: Ext.getBody(),
        columns: columnsMetadata,
        height: 800,
        region: 'north',
        layout:'fit',
        plugins: 'gridfilters',
        multiSelect: true,
        selType: 'checkboxmodel',
        features: [{
            ftype: 'groupingsummary',
            groupHeaderTpl: 'Asset Type: {name}'
        } ],
        listeners: {
            'cellclick': cellClick
        },
        viewConfig: {
            listeners: {
                refresh: autoSizesColumn
            }
        },
        multiColumnSort: true
    });

    Store.load();

    var Panel = {
        id: 'detailPanel',
        region: 'center',
        bodyPadding: 7,
        bodyStyle: "background: #ffffff;",
        html: 'Please select a row.'
    };

    var View =  Ext.create('Ext.container.Viewport',{
        items:
            [
                Grid,
                Panel
            ]
    });
});
