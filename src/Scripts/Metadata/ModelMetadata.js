var modelExtJsMetadata = [
    { name: 'AssetType', type: 'string'},
    { name: 'AssetStandard', type: 'string'},
    { name: 'AssetStatus', type: 'string'},
    { name: 'TitleDescription', type: 'string'},
    { name: 'GeoRegionID', type: 'string'},
    { name: 'CountryCode', type: 'string'},
    { name: 'StateCode', type: 'string'},
    { name: 'CityCode', type: 'string'},
    { name: 'SiteCode', type: 'string'},
    { name: 'BuildingCode', type: 'string'},
    { name: 'FloorCode', type: 'string'},
    { name: 'RoomCode', type: 'string'},
    { name: 'BusinessUnit', type: 'string'},
    { name: 'DivisionCode', type: 'string'},
    { name: 'DepartmentCode', type: 'string'},
    { name: 'Data', type:'date', dateFormat: 'n/j/Y'}
];

var modelKendoMetadata =  {
        AssetType: { type: "string" },
        AssetStandard: { type: "string" },
        AssetStatus: { type: "string" },
        TitleDescription: { type: "string" },
        GeoRegionID: { type: "string" },
        CountryCode: { type: "string" },
        StateCode: { type: "string" },
        CityCode: { type: "string" },
        SiteCode: { type: "string" },
        BuildingCode: { type: "string" },
        FloorCode: { type: "string" },
        RoomCode: { type: "string" },
        BusinessUnit: { type: "string" },
        DivisionCode: { type: "string" },
        DepartmentCode: { type: "string" },
        Data: { type: "date" }
    };

module.exports.ModelExtJs = modelExtJsMetadata;
module.exports.ModelKendo = modelKendoMetadata;