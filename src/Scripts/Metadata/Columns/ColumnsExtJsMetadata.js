var classStyle = require('../Enumeration').ClassStyle;
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;

function summaryRendererAssetType(value){
    return Ext.String.format('Sum: {0}', value);
}

function renderActivity (val, metaData) {
    var currentEnumStyle = classStyle[metaData.column.dataIndex];
    for(element in currentEnumStyle){
        if(currentEnumStyle[element].cellText == val){
            metaData.tdCls = currentEnumStyle[element].classStyle;
        }
    }
    return val;
}

var columnsExtJsMetadata = [
    {
        text: columnTitle.AssetType,
        dataIndex: dataIndex.AssetType,
        width: 150,
        sortable: true,
        summaryType: 'count',
        summaryRenderer: summaryRendererAssetType,
        renderer: renderActivity
    },
    {
        text: columnTitle.AssetStandard,
        dataIndex: dataIndex.AssetStandard,
        width: 125,
        sortable: true,
        filter:  'string',
        renderer: renderActivity
    },
    {
        text: columnTitle.AssetStatus,
        dataIndex: dataIndex.AssetStatus,
        width: 125,
        sortable: true,
        filter: {
            type: 'list',
            options:['ESCROWED','FOR SALE','LEASED','LEASED (EXPIRED)','N/A', 'OWNED', 'OWNED AND LEASED', 'SOLD', 'SUB LET', 'SUB-LEASED', 'UNDER CONTRACT', 'UNKNOWN', 'in', 'miss', 'out', 'rep', 'stor',]
        },
        renderer: renderActivity
    },
    {
        text: columnTitle.TitleDescription,
        dataIndex: dataIndex.TitleDescription,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.GeoRegionID,
        dataIndex: dataIndex.GeoRegionID,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.CountryCode,
        dataIndex: dataIndex.CountryCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.StateCode,
        dataIndex: dataIndex.StateCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.CityCode,
        dataIndex: dataIndex.CityCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.SiteCode,
        dataIndex: dataIndex.SiteCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.BuildingCode,
        dataIndex: dataIndex.BuildingCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.FloorCode,
        dataIndex: dataIndex.FloorCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.RoomCode,
        dataIndex: dataIndex.RoomCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.BusinessUnit,
        dataIndex: dataIndex.BusinessUnit,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.DivisionCode,
        dataIndex: dataIndex.DivisionCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.DepartmentCode,
        dataIndex: dataIndex.DepartmentCode,
        width: 125,
        sortable: true,
        renderer: renderActivity
    },
    {
        text: columnTitle.Data,
        dataIndex: dataIndex.Data,
        width: 125,
        sortable: true,
        xtype:'datecolumn',
        format: 'd/m/Y',
        filter: {
            type: 'date',
            dateFormat: 'm/d/Y'
        },
        renderer: renderActivity
    }
];

module.exports = columnsExtJsMetadata;
