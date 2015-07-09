var itemsPerPage = 50;

var columnsMetadata = require('../Scripts/Metadata/ColumnsMetadata');
var dataMetadata = require('../Scripts/Metadata/ModelMetadata');
var data= require('../Scripts/Dataset/Data');

Ext.onReady(function(){

    Ext.define('Assets',{
        extend: 'Ext.data.Model',
        fields: dataMetadata
    });

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
        height:800,
        region: 'north',
        plugins: 'gridfilters',
        multiSelect: true,
        selType: 'checkboxmodel',
        features: [{
            ftype: 'groupingsummary',
            groupHeaderTpl: 'Asset Type: {name}'
        }],
        listeners: {
            'cellclick': function(iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
                Ext.Msg.alert('Cell click', 'Cell: ' + iColIdx + ' Row: ' + iRowIdx);
                var detailPanel = Ext.getCmp('detailPanel');
                detailPanel.update('Asset Status: ' + iStore.data.AssetStatus);
            }
        }
    });

    var Panel = {
        id: 'detailPanel',
        region: 'center',
        bodyPadding: 7,
        bodyStyle: "background: #ffffff;",
        html: 'Please select a row.'
    };

    Ext.create('Ext.container.Viewport',{
        items:
            [
                Grid,
                Panel
            ]
    });

    Store.load();

});