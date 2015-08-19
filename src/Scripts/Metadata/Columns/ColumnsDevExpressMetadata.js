var classStyle = require('../Enumeration').ClassStyle;
var dataIndex = require('../Enumeration').DataIndex;
var columnTitle = require('../Enumeration').ColumnsText;

var buttonsMetadata = require('../Buttons/ButtonDevExpressMetadata');


function renderButton(cellElement, cellInfo){

    for(number in buttonsMetadata){
        var button = buttonsMetadata[number];
        var conditions = button.condition;
        for(element in conditions){
            var condition = conditions[element];
            if(cellInfo.data[condition.column] == condition.value){
                var $button = $('<img src="'+ button.icon +'">')
                    .on("click", $.proxy(button.handler, this, cellInfo));
                cellElement.append($button);
                break;
            }
        }
    }
}

function cellColor(container, cellInfo){
    var dataIndex = cellInfo.column.dataField;
    var currentEnumStyle = classStyle[dataIndex];
    for(element in currentEnumStyle){
        if(cellInfo.data.CountryCode == currentEnumStyle[element].cellText){
            container.addClass(currentEnumStyle[element].classStyle);
        }
    }
    $('<span>').text(cellInfo.data[dataIndex]).appendTo(container);
}

var columnsDevExpressMetadata = [
    {
        caption: columnTitle.AssetType,
        dataField: dataIndex.AssetType,
        dataType: 'string',
        groupIndex: 0,
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.AssetStandard,
        dataField: dataIndex.AssetStandard,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.AssetStatus,
        dataField: dataIndex.AssetStatus,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.TitleDescription,
        dataField: dataIndex.TitleDescription,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.GeoRegionID,
        dataField: dataIndex.GeoRegionID,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.CountryCode,
        dataField: dataIndex.CountryCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.StateCode,
        dataField: dataIndex.StateCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.CityCode,
        dataField: dataIndex.CityCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.SiteCode,
        dataField: dataIndex.SiteCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.BuildingCode,
        dataField: dataIndex.BuildingCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.FloorCode,
        dataField: dataIndex.FloorCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.RoomCode,
        dataField: dataIndex.RoomCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.BusinessUnit,
        dataField: dataIndex.BusinessUnit,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.DivisionCode,
        dataField: dataIndex.DivisionCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.DepartmentCode,
        dataField: dataIndex.DepartmentCode,
        dataType: 'string',
        width: 200,
        cellTemplate: cellColor
    },
    {
        caption: columnTitle.Data,
        dataField: dataIndex.Data,
        dataType: 'data',
        width: 200,
        cellTemplate: cellColor
    },
    {
        cellTemplate: renderButton,
        width: 200
    }
];


module.exports = columnsDevExpressMetadata;
