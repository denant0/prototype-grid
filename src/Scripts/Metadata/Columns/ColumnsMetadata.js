var classStyle = require('../Enumeration').ClassStyle;
var dataIndex = require('../Enumeration').DataIndex;

var columnsDevExpressMetadata = [
    {caption: 'Asset Type', dataField: 'AssetType', dataType: 'string', groupIndex: 0, width: 200},
    {caption: 'Asset Standard', dataField: 'AssetStandard', dataType: 'string', width: 200},
    {caption: 'Asset Status', dataField: 'AssetStatus', dataType: 'string', width: 200},
    {caption: 'Title/Description', dataField: 'TitleDescription', dataType: 'string', width: 200},
    {caption: 'Geo-Region ID', dataField: 'GeoRegionID', dataType: 'string', width: 200},
    {caption: 'Country Code', dataField: 'CountryCode', dataType: 'string', width: 200,   cellTemplate: function (container, cellInfo) {
        var currentEnumStyle = classStyle[cellInfo.column.dataField];
        for(element in currentEnumStyle){
            if(cellInfo.data.CountryCode == currentEnumStyle[element].cellText){
                container.addClass(currentEnumStyle[element].classStyle);
            }
        }
        $('<span>').text(cellInfo.data.CountryCode).appendTo(container);
    }},
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

module.exports.ColumnsDevExpress = columnsDevExpressMetadata;
module.exports.ColumnsKendo = columnsKendoMetadata;