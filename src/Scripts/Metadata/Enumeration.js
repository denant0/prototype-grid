var classStyle = {
    CountryCode:[
        {
            cellText: 'USA',
            classStyle: 'usa'
        },
        {
            cellText: 'ARG',
            classStyle: 'arg'
        },
        {
            cellText: 'MEX',
            classStyle: 'mex'
        },
        {
            cellText: 'BRA',
            classStyle: 'bra'
        },
        {
            cellText: 'CAN',
            classStyle: 'can'
        }
    ]
};

var dataIndex = {
    AssetType: 'AssetType',
    AssetStandard: 'AssetStandard',
    AssetStatus: 'AssetStatus',
    TitleDescription: 'TitleDescription',
    GeoRegionID: 'GeoRegionID',
    CountryCode: 'CountryCode',
    StateCode: 'StateCode',
    CityCode: 'CityCode',
    SiteCode: 'SiteCode',
    BuildingCode: 'BuildingCode',
    FloorCode: 'FloorCode',
    RoomCode: 'RoomCode',
    BusinessUnit: 'BusinessUnit',
    DivisionCode: 'DivisionCode',
    DepartmentCode: 'DepartmentCode',
    Data: 'Data'
};

var columnsText = {
    AssetType: 'Asset Type',
    AssetStandard: 'Asset Standard',
    AssetStatus: 'Asset Status',
    TitleDescription: 'Title Description',
    GeoRegionID: 'Geo-Region ID',
    CountryCode: 'Country Code',
    StateCode: 'State Code',
    CityCode: 'City Code',
    SiteCode: 'Site Code',
    BuildingCode: 'Building Code',
    FloorCode: 'Floor Code',
    RoomCode: 'Room Code',
    BusinessUnit: 'Business Unit',
    DivisionCode: 'Division Code',
    DepartmentCode: 'Department Code',
    Data: 'Data'
};

var buttonsMetadata = [
    {
        condition: {
            column: dataIndex.AssetType,
            value: 'bl'
        },
        items: [
            [
                {
                    text: 'Button1',
                    function: function(){
                        alert('Hello 1');
                    }
                },
                {
                    text: 'Button2',
                    function: function(){
                        alert('Hello 2');
                    }
                }
            ],
            [
                {
                    text: 'Button3',
                    function: function(){
                        alert('Hello 3');
                    }
                }
            ]
        ]
    }
];

module.exports.ClassStyle = classStyle;
module.exports.DataIndex = dataIndex;
module.exports.ColumnsText = columnsText;
module.exports.ButtonsMetadata = buttonsMetadata;