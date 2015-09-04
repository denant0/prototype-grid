
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;


var columnsWebixMetadata = [
    { id:"ch1", header:"", template:"{common.checkbox()}"},
    {
        id: dataIndex.AssetType,
        header: [columnTitle.AssetType,{content:"selectFilter"}],
        width: 125,
        sort:"string"

    },
    {
        header: [columnTitle.AssetStandard,{content:"selectFilter"}],
        id: dataIndex.AssetStandard,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.AssetStatus,{content:"selectFilter"}],
        id: dataIndex.AssetStatus,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.TitleDescription,{content:"selectFilter"}],
        id: dataIndex.TitleDescription,
        width: 300,
        sort:"string"
    },
    {
        header: [columnTitle.GeoRegionID,{content:"selectFilter"}],
        id: dataIndex.GeoRegionID,
        sort:"string"
    },
    {
        header: [columnTitle.CountryCode,{content:"selectFilter"}],
        id: dataIndex.CountryCode,
        width: 125,
        cssFormat:cellColor,
        sort:"string"
    },
    {
        header: [columnTitle.StateCode,{content:"selectFilter"}],
        id: dataIndex.StateCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.CityCode,{content:"selectFilter"}],
        id: dataIndex.CityCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.SiteCode,{content:"selectFilter"}],
        id: dataIndex.SiteCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.BuildingCode,{content:"selectFilter"}],
        id: dataIndex.BuildingCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.FloorCode,{content:"selectFilter"}],
        id: dataIndex.FloorCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.RoomCode,{content:"selectFilter"}],
        id: dataIndex.RoomCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.BusinessUnit,{content:"selectFilter"}],
        id: dataIndex.BusinessUnit,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.DivisionCode,{content:"selectFilter"}],
        id: dataIndex.DivisionCode,
        width: 125,
        sort:"string"
    },
    {
        header: [columnTitle.DepartmentCode,{content:"selectFilter"}],
        id: dataIndex.DepartmentCode,
        width: 125,
        sort:"string"
    },
    {
        header: columnTitle.Data,
        id: dataIndex.Data,
        width: 125,
        sort:"string"
    },
    {
        template:renderButton


    }
];

var buttonsMetadata = require('../Buttons/ButtonWebixMetadata').Button;
var classStyle = require('../Enumeration').ClassStyle;


function cellColor(container, cellInfo, t,y){
    var currentEnumStyle = classStyle[y];
    for(element in currentEnumStyle){
        if(container == currentEnumStyle[element].cellText){
            return currentEnumStyle[element].classStyle;
        }
    }

}

function renderButton(cellElement, cellInfo){
    var result = "";
    for(number in buttonsMetadata){
        var button = buttonsMetadata[number];
        var conditions = button.condition;
        for(element in conditions){
            var condition = conditions[element];
            if(cellElement[condition.column] == condition.value){
                result = result + "<img class='" + button.class + "' src='" + button.icon + "'/>"
                break;
            }
        }
    }
    return result;
}


module.exports = columnsWebixMetadata;
