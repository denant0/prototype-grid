var classStyle = require('../Enumeration').ClassStyle;
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;
var buttonsMetadata = require('../Buttons/ButtonsExtJsMetadata');

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
var columnsExtJsMetadata = [
    {
        text: columnTitle.AssetType,
        dataIndex: dataIndex.AssetType,
        width: 125,
        sortable: true,
        autoSizeColumn : true,
        summaryType: 'count',
        summaryRenderer: summaryRendererAssetType
    },
    {
        text: columnTitle.AssetStandard,
        dataIndex: dataIndex.AssetStandard,
        width: 125,
        autoSizeColumn : true,
        sortable: true,
        filter:  'string'
    },
    {
        text: columnTitle.AssetStatus,
        dataIndex: dataIndex.AssetStatus,
        width: 125,
        autoSizeColumn : true,
        sortable: true,
        filter: {
            type: 'list',
            options:['ESCROWED','FOR SALE','LEASED','LEASED (EXPIRED)','N/A', 'OWNED', 'OWNED AND LEASED', 'SOLD', 'SUB LET', 'SUB-LEASED', 'UNDER CONTRACT', 'UNKNOWN', 'in', 'miss', 'out', 'rep', 'stor',]
        }
    },
    {
        text: columnTitle.TitleDescription,
        dataIndex: dataIndex.TitleDescription,
        width: 300,
        autoSizeColumn : false,
        sortable: true
    },
    {
        text: columnTitle.GeoRegionID,
        dataIndex: dataIndex.GeoRegionID,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.CountryCode,
        dataIndex: dataIndex.CountryCode,
        autoSizeColumn : true,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.StateCode,
        dataIndex: dataIndex.StateCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.CityCode,
        dataIndex: dataIndex.CityCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.SiteCode,
        dataIndex: dataIndex.SiteCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.BuildingCode,
        dataIndex: dataIndex.BuildingCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.FloorCode,
        dataIndex: dataIndex.FloorCode,
        width: 125,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.RoomCode,
        dataIndex: dataIndex.RoomCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.BusinessUnit,
        dataIndex: dataIndex.BusinessUnit,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.DivisionCode,
        dataIndex: dataIndex.DivisionCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.DepartmentCode,
        dataIndex: dataIndex.DepartmentCode,
        autoSizeColumn : true,
        sortable: true
    },
    {
        text: columnTitle.Data,
        dataIndex: dataIndex.Data,
        autoSizeColumn : true,
        sortable: true,
        xtype:'datecolumn',
        format: 'd/m/Y',
        filter: {
            type: 'date',
            dateFormat: 'm/d/Y'
        }
    },
    {
        xtype: 'actioncolumn',
        items: buttonsMetadata,
        autoSizeColumn : true
    }

];



module.exports = columnsExtJsMetadata;
