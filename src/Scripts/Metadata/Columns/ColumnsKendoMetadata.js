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

        groupHeaderTemplate: 'Asset Type: #= value # (Count: #= count#)'
    },
    {
        title: columnTitle.AssetStandard,
        field: dataIndex.AssetStandard
    },
    {
        title: columnTitle.AssetStatus,
        field: dataIndex.AssetStatus,
        filterable:
        {
            multi: true
        }
    },
    {
        title: columnTitle.TitleDescription,
        field: dataIndex.TitleDescription,
        width: 300
    },
    {
        title: columnTitle.GeoRegionID,
        field: dataIndex.GeoRegionID
    },
    {
        title: columnTitle.CountryCode,
        field: dataIndex.CountryCode
    },
    {
        title: columnTitle.StateCode,
        field: dataIndex.StateCode
    },
    {
        title: columnTitle.CityCode,
        field: dataIndex.CityCode
    },
    {
        title: columnTitle.SiteCode,
        field: dataIndex.SiteCode
    },
    {
        title: columnTitle.BuildingCode,
        field: dataIndex.BuildingCode
    },
    {
        title: columnTitle.FloorCode,
        field: dataIndex.FloorCode
    },
    {
        title: columnTitle.RoomCode,
        field: dataIndex.RoomCode
    },
    {
        title: columnTitle.BusinessUnit,
        field: dataIndex.BusinessUnit
    },
    {
        title: columnTitle.DivisionCode,
        field: dataIndex.DivisionCode
    },
    {
        title: columnTitle.DepartmentCode,
        field: dataIndex.DepartmentCode
    },
    {
        title: dataIndex.Data,
        field: dataIndex.Data,
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

module.exports.IdMas = idMas;
module.exports.Columns = columnsKendoMetadata;
