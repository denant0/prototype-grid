var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;
var buttonsMetadata = require('../Buttons/ButtonKendoMetadata');

var idMas = [];
var idNumber = 1;

function renderButton(value){
    var result = '';
    for(number in buttonsMetadata){
        var button = buttonsMetadata[number];
        var conditions = button.condition;
        for(element in conditions){
            var condition = conditions[element];
            if(value[condition.column] == condition.value){
                var id = createId();
                result = kendo.format('{1}<div id="{0}" style="float: left"></div>',id, result,button.tooltip);
                idMas.push({id: id, numberButton: number});
                break;
            }
        }
    }
    return result;
}

function createId(){
    var id = kendo.format('kendo-{0}', idNumber);
    idNumber++;
    return id;
}

var columnsKendoMetadata = [
    {
        width: 50,
        template: '<input class="checkbox" type="checkbox" />'
    },
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
    },
    {
        template: renderButton,
        width: 200
    }

];

module.exports.Id = idMas;
module.exports.col = columnsKendoMetadata;
