var dataIndex = require('../Enumeration').DataIndex;

var modelExtJsMetadata = [
    { name: dataIndex.AssetType, type: 'string'},
    { name: dataIndex.AssetStandard, type: 'string'},
    { name: dataIndex.AssetStatus, type: 'string'},
    { name: dataIndex.TitleDescription, type: 'string'},
    { name: dataIndex.GeoRegionID, type: 'string'},
    { name: dataIndex.CountryCode, type: 'string'},
    { name: dataIndex.StateCode, type: 'string'},
    { name: dataIndex.CityCode, type: 'string'},
    { name: dataIndex.SiteCode, type: 'string'},
    { name: dataIndex.BuildingCode, type: 'string'},
    { name: dataIndex.FloorCode, type: 'string'},
    { name: dataIndex.RoomCode, type: 'string'},
    { name: dataIndex.BusinessUnit, type: 'string'},
    { name: dataIndex.DivisionCode, type: 'string'},
    { name: dataIndex.DepartmentCode, type: 'string'},
    { name: dataIndex.Data, type:'date', dateFormat: 'n/j/Y'}
];


module.exports = modelExtJsMetadata;