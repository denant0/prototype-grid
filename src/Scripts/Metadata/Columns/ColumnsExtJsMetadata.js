var classStyle = require('../Enumeration').ClassStyle;
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;
var buttonsMetadata = require('../Enumeration').ButtonsMetadata;


function summaryRendererAssetType(value){
    return Ext.String.format('Sum: {0}', value);
}

function renderActivity (value, metaData) {
    var currentEnumStyle = classStyle[metaData.column.dataIndex];
    for(element in currentEnumStyle){
        if(currentEnumStyle[element].cellText == value){
            metaData.tdCls = currentEnumStyle[element].classStyle;
        }
    }
    return value;
}

/*function renderButton(value, metadata, record){

}*/
Ext.Loader.setConfig({ enabled: true
});
var columnsExtJsMetadata = [
    {
        header: columnTitle.AssetType,
        dataIndex: dataIndex.AssetType,
        width: 150,
        sortable: true,
        summaryType: 'count',
        summaryRenderer: summaryRendererAssetType,
        renderer: renderActivity
    },
    {
        header: columnTitle.AssetStandard,
        dataIndex: dataIndex.AssetStandard,
        width: 150,
        sortable: true,
        filter:  'string',
        renderer: renderActivity
    },
    {
        header: columnTitle.AssetStatus,
        dataIndex: dataIndex.AssetStatus,
        width: 150,
        sortable: true,
        filter: {
            type: 'list',
            options:['ESCROWED','FOR SALE','LEASED','LEASED (EXPIRED)','N/A', 'OWNED', 'OWNED AND LEASED', 'SOLD', 'SUB LET', 'SUB-LEASED', 'UNDER CONTRACT', 'UNKNOWN', 'in', 'miss', 'out', 'rep', 'stor',]
        },
        renderer: renderActivity
    },
    {
        header: columnTitle.TitleDescription,
        dataIndex: dataIndex.TitleDescription,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.GeoRegionID,
        dataIndex: dataIndex.GeoRegionID,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.CountryCode,
        dataIndex: dataIndex.CountryCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.StateCode,
        dataIndex: dataIndex.StateCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.CityCode,
        dataIndex: dataIndex.CityCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.SiteCode,
        dataIndex: dataIndex.SiteCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.BuildingCode,
        dataIndex: dataIndex.BuildingCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.FloorCode,
        dataIndex: dataIndex.FloorCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.RoomCode,
        dataIndex: dataIndex.RoomCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.BusinessUnit,
        dataIndex: dataIndex.BusinessUnit,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.DivisionCode,
        dataIndex: dataIndex.DivisionCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.DepartmentCode,
        dataIndex: dataIndex.DepartmentCode,
        width: 150,
        sortable: true,
        renderer: renderActivity
    },
    {
        header: columnTitle.Data,
        dataIndex: dataIndex.Data,
        width: 150,
        sortable: true,
        xtype:'datecolumn',
        format: 'd/m/Y',
        filter: {
            type: 'date',
            dateFormat: 'm/d/Y'
        },

        renderer: renderActivity
    },
    {
        header: 'Buttons',
        width: 150,
        renderer: renderBtn

    }

];

function renderBtn(value, metadata, record) {
    var delay = 1;
    var result = '<table>';
    for(conditionNumber in buttonsMetadata){
        var condition = buttonsMetadata[conditionNumber].condition;
        if(record.data[condition.column] == condition.value) {
            var items = buttonsMetadata[conditionNumber].items;
            for (lineNumber in items) {
                result = Ext.String.format('{0}<tr>', result);
                var line = items[lineNumber];
                for (buttonNumber in line) {
                    var button = line[buttonNumber];
                    var id = Ext.id();
                    Ext.defer(createGridButton, delay, this, [button, id]);
                    delay++;
                    result = Ext.String.format('{0}<td><div id="{1}"></div></td>', result, id);
                }
                result = Ext.String.format('{0}</tr>', result);
            }
        }
    }
    result = Ext.String.format('{0}</table>', result);

    return result;
}
function createGridButton(metadata, id) {
    new Ext.Button(
        {
            text: metadata.text,
            flex: 1,
            handler : metadata.function
        }
    ).render(id);
}



module.exports = columnsExtJsMetadata;
