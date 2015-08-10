var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;

var columnsKendoMetadata = [
    {
        title: columnTitle.AssetType,
        field: dataIndex.AssetType,
        width: 200,
        groupHeaderTemplate: 'Asset Type: #= value # (Count: #= count#)'
    },
    {
        title: columnTitle.AssetStandard,
        field: dataIndex.AssetStandard,
        width: 200
    },
    {
        title: columnTitle.AssetStatus,
        field: dataIndex.AssetStatus,
        width: 200,
        filterable:
        {
            multi: true
        }
    },
    {
        title: columnTitle.TitleDescription,
        field: dataIndex.TitleDescription,
        width: 500
    },
    {
        title: columnTitle.GeoRegionID,
        field: dataIndex.GeoRegionID,
        width: 200
    },
    {
        title: columnTitle.CountryCode,
        field: dataIndex.CountryCode,
        width: 200
    },
    {
        title: columnTitle.StateCode,
        field: dataIndex.StateCode,
        width: 200
    },
    {
        title: columnTitle.CityCode,
        field: dataIndex.CityCode,
        width: 200
    },
    {
        title: columnTitle.SiteCode,
        field: dataIndex.SiteCode,
        width: 200
    },
    {
        title: columnTitle.BuildingCode,
        field: dataIndex.BuildingCode,
        width: 200
    },
    {
        title: columnTitle.FloorCode,
        field: dataIndex.FloorCode,
        width: 200
    },
    {
        title: columnTitle.RoomCode,
        field: dataIndex.RoomCode,
        width: 200
    },
    {
        title: columnTitle.BusinessUnit,
        field: dataIndex.BusinessUnit,
        width: 200
    },
    {
        title: columnTitle.DivisionCode,
        field: dataIndex.DivisionCode,
        width: 200
    },
    {
        title: columnTitle.DepartmentCode,
        field: dataIndex.DepartmentCode,
        width: 200
    },
    {
        title: dataIndex.Data,
        field: dataIndex.Data,
        width: 200,
        format: "{0:MM/dd/yyyy HH:mm tt}",
        filterable:
        {
            ui: "datetimepicker"
        }
    }
];

module.exports = columnsKendoMetadata;
