function summary(value){
    return Ext.String.format('Sum: {0}', value);
}

var columnsExtJsMetadata = [
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

var columnsDevExpressMetadata = [
    {caption: 'Asset Type', dataField: 'AssetType', dataType: 'string', groupIndex: 0, width: 200},
    {caption: 'Asset Standard', dataField: 'AssetStandard', dataType: 'string', width: 200},
    {caption: 'Asset Status', dataField: 'AssetStatus', dataType: 'string', width: 200},
    {caption: 'Title/Description', dataField: 'TitleDescription', dataType: 'string', width: 200},
    {caption: 'Geo-Region ID', dataField: 'GeoRegionID', dataType: 'string', width: 200},
    {caption: 'Country Code', dataField: 'CountryCode', dataType: 'string', width: 200},
    {caption: 'State Code', dataField: 'StateCode', dataType: 'string', width: 200},
    {caption: 'City Code', dataField: 'CityCode', dataType: 'string', width: 200},
    {caption: 'Site Code', dataField: 'SiteCode', dataType: 'string', width: 200},
    {caption: 'Building Code', dataField: 'BuildingCode', dataType: 'string', width: 200},
    {caption: 'Floor Code', dataField: 'FloorCode', dataType: 'string', width: 200},
    {caption: 'Room Code', dataField: 'RoomCode', dataType: 'string', width: 200},
    {caption: 'Business Unit', dataField: 'BusinessUnit', dataType: 'string', width: 200},
    {caption: 'Division Code', dataField: 'DivisionCode', dataType: 'string', width: 200},
    {caption: 'Department Code', dataField: 'DepartmentCode', dataType: 'string', width: 200},
    {caption: 'Date', dataField: 'Data', dataType: 'data', width: 200}
];

var columnsKendoMetadata = [
    {title: 'Asset Type', field: 'AssetType', width: 200, groupHeaderTemplate: 'Asset Type: #= value # (Count: #= count#)'},
    {title: 'Asset Standard', field: 'AssetStandard', width: 200},
    {title: 'Asset Status', field: 'AssetStatus', width: 200, filterable: { multi: true }},
    {title: 'Title/Description', field: 'TitleDescription', width: 500},
    {title: 'Geo-Region ID', field: 'GeoRegionID', width: 200},
    {title: 'Country Code', field: 'CountryCode', width: 200},
    {title: 'State Code', field: 'StateCode', width: 200},
    {title: 'City Code', field: 'CityCode', width: 200},
    {title: 'Site Code', field: 'SiteCode', width: 200},
    {title: 'Building Code', field: 'BuildingCode', width: 200},
    {title: 'Floor Code', field: 'FloorCode', width: 200},
    {title: 'Room Code', field: 'RoomCode', width: 200},
    {title: 'Business Unit', field: 'BusinessUnit', width: 200},
    {title: 'Division Code', field: 'DivisionCode', width: 200},
    {title: 'Department Code', field: 'DepartmentCode', width: 200},
    {title: 'Date', field: 'Data', width: 200, format: "{0:MM/dd/yyyy HH:mm tt}", filterable: { ui: "datetimepicker" }}
];

module.exports.ColumnsExtJs = columnsExtJsMetadata;
module.exports.ColumnsDevExpress = columnsDevExpressMetadata;
module.exports.ColumnsKendo = columnsKendoMetadata;