function summary(value){
    return Ext.String.format('Sum: {0}', value);
}

var columnsMetadata = [
    {text: 'Asset Type', width: 150, dataIndex: 'AssetType', sortable: true, summaryType: 'count',
        summaryRenderer: summary
    },
    {text: 'Asset Standard', width: 125, dataIndex: 'AssetStandard', sortable: true, filter:  'string'},
    {text: 'Asset Status', width: 125, dataIndex: 'AssetStatus', sortable: true,
        filter: {
            type: 'list',
            options:['ESCROWED','FOR SALE','LEASED','LEASED (EXPIRED)','N/A', 'OWNED', 'OWNED AND LEASED', 'SOLD', 'SUB LET', 'SUB-LEASED', 'UNDER CONTRACT', 'UNKNOWN', 'in', 'miss', 'out', 'rep', 'stor',]
        }
    },
    {text: 'Title/Description', width: 125, dataIndex: 'TitleDescription', sortable: true},
    {text: 'Geo-Region ID', width: 125, dataIndex: 'GeoRegionID', sortable: true},
    {text: 'Country Code', width: 125, dataIndex: 'CountryCode', sortable: true},
    {text: 'State Code', width: 125, dataIndex: 'StateCode', sortable: true},
    {text: 'City Code', width: 125, dataIndex: 'CityCode', sortable: true},
    {text: 'Site Code', width: 125, dataIndex: 'SiteCode', sortable: true},
    {text: 'Building Code', width: 125, dataIndex: 'BuildingCode', sortable: true},
    {text: 'Floor Code', width: 125, dataIndex: 'FloorCode', sortable: true},
    {text: 'Room Code', width: 125, dataIndex: 'RoomCode', sortable: true},
    {text: 'Business Unit', width: 125, dataIndex: 'BusinessUnit', sortable: true},
    {text: 'Division Code', width: 125, dataIndex: 'DivisionCode', sortable: true},
    {text: 'Department Code', width: 125, dataIndex: 'DepartmentCode', sortable: true},
    {text: 'Date', width: 125, dataIndex: 'Data', sortable: true, xtype:'datecolumn', format: 'd/m/Y',
        filter: {
            type: 'date',
            dateFormat: 'm/d/Y'
        }
    }
];

module.exports = columnsMetadata;