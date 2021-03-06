
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;

function status(value, obj, t, y){
    if (obj.ch1 && !obj.$group)
        return "row-marked";
    return "";
}

var columnsWebixMetadata = [
    {
        id: "ch1",
        header: "",
        width: 40,
        template: "{common.checkbox()}"
    },
    {
        id: dataIndex.AssetType,
        header: [columnTitle.AssetType,{content:"selectFilter"}],
        sort:"string",
        width: 200,
        template:function(obj, common){
            if (obj.$group)
                return common.treetable(obj, common) + "AssetType: " + obj.value + ". Count: " + obj.$count;
            return obj.AssetType;
        },
        cssFormat:status
    },
    {
        header: [columnTitle.AssetStandard,{content:"selectFilter"}],
        id: dataIndex.AssetStandard,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.AssetStatus,{content:"selectFilter"}],
        id: dataIndex.AssetStatus,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.TitleDescription,{content:"selectFilter"}],
        id: dataIndex.TitleDescription,
        sort:"string",
        width: 300,
        cssFormat:status
    },
    {
        header: [columnTitle.GeoRegionID,{content:"selectFilter"}],
        id: dataIndex.GeoRegionID,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.CountryCode,{content:"selectFilter"}],
        id: dataIndex.CountryCode,
        cssFormat:cellColor,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.StateCode,{content:"selectFilter"}],
        id: dataIndex.StateCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.CityCode,{content:"selectFilter"}],
        id: dataIndex.CityCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.SiteCode,{content:"selectFilter"}],
        id: dataIndex.SiteCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.BuildingCode,{content:"selectFilter"}],
        id: dataIndex.BuildingCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.FloorCode,{content:"selectFilter"}],
        id: dataIndex.FloorCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.RoomCode,{content:"selectFilter"}],
        id: dataIndex.RoomCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.BusinessUnit,{content:"selectFilter"}],
        id: dataIndex.BusinessUnit,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.DivisionCode,{content:"selectFilter"}],
        id: dataIndex.DivisionCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: [columnTitle.DepartmentCode,{content:"selectFilter"}],
        id: dataIndex.DepartmentCode,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        header: columnTitle.Data,
        id: dataIndex.Data,
        sort:"string",
        width: 125,
        cssFormat:status
    },
    {
        template:renderButton,
        width: 200,
        cssFormat:status
    }
];

var buttonsMetadata = require('../Buttons/ButtonWebixMetadata').Button;
var classStyle = require('../Enumeration').ClassStyle;


function cellColor(container, cellInfo, t,y){
    if (cellInfo.ch1 && ! cellInfo.$group) return "row-marked";
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
