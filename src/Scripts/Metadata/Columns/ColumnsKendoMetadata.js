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

module.exports = columnsKendoMetadata;
