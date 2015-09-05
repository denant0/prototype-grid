
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;


var columnsWebixMetadata = [
    { id:"ch1", header:"", template:"{common.checkbox()}"},
    {
        id: dataIndex.AssetType,
        header: [columnTitle.AssetType,{content:"selectFilter"}],
        adjust:'data',
        sort:"string",
        template:function(obj, common){
            if (obj.$group) return  common.treetable(obj, common) + "AssetType: " + obj.value + ". Count: " + obj.$count;
            return obj.AssetType;
        }
    },
    {
        header: [columnTitle.AssetStandard,{content:"selectFilter"}],
        id: dataIndex.AssetStandard,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.AssetStatus,{content:"selectFilter"}],
        id: dataIndex.AssetStatus,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.TitleDescription,{content:"selectFilter"}],
        id: dataIndex.TitleDescription,
        sort:"string",
        width: 300
    },
    {
        header: [columnTitle.GeoRegionID,{content:"selectFilter"}],
        id: dataIndex.GeoRegionID,
        sort:"string",
        width: 125
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
        width: 125
    },
    {
        header: [columnTitle.CityCode,{content:"selectFilter"}],
        id: dataIndex.CityCode,
        adjust:true,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.SiteCode,{content:"selectFilter"}],
        id: dataIndex.SiteCode,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.BuildingCode,{content:"selectFilter"}],
        id: dataIndex.BuildingCode,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.FloorCode,{content:"selectFilter"}],
        id: dataIndex.FloorCode,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.RoomCode,{content:"selectFilter"}],
        id: dataIndex.RoomCode,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.BusinessUnit,{content:"selectFilter"}],
        id: dataIndex.BusinessUnit,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.DivisionCode,{content:"selectFilter"}],
        id: dataIndex.DivisionCode,
        sort:"string",
        width: 125
    },
    {
        header: [columnTitle.DepartmentCode,{content:"selectFilter"}],
        id: dataIndex.DepartmentCode,
        sort:"string",
        width: 125
    },
    {
        header: columnTitle.Data,
        id: dataIndex.Data,
        sort:"string",
        width: 125
    },
    {
        template:renderButton,
        width: 200
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
