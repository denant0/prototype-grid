var data= require('../Scripts/Dataset/Data');
var modelMetadata = require('../Scripts/Metadata/Model/ModelKendoMetadata');
var columnsMetadata = require('../Scripts/Metadata/Columns/ColumnsKendoMetadata').Columns;

var classStyle = require('../Scripts/Metadata/Enumeration').ClassStyle;
var dataIndex = require('../Scripts/Metadata/Enumeration').DataIndex;

var buttonsMetadata = require('../Scripts/Metadata/Buttons/ButtonKendoMetadata');
var idMas = require('../Scripts/Metadata/Columns/ColumnsKendoMetadata').IdMas;



$(document).ready(function () {

    var gridElement = $("#gridContainer");

    function onChange(arg) {
        var selected = $.map(this.select(), function(item) {
            var test = item.cellIndex +','+ item.innerHTML;
            return test;
        });

        kendoConsole.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }

    function resizeGrid() {
        gridElement.data("kendoGrid").resize();
    }

    function getCellColorClass(val, dataIndex) {
        var currentEnumStyle = classStyle[dataIndex];
            for(element in currentEnumStyle){
                if(currentEnumStyle[element].cellText == val){
                    return currentEnumStyle[element].classStyle;
                }
            }


    }

    $(window).resize(function(){
        resizeGrid();
    });


    var configuration = {
        dataSource: {
            data: data.data,
            schema: {
                model: {
                    fields: modelMetadata
                }
            },
            group: {
                field: 'AssetType',
                aggregates: [
                    {field: 'AssetType', aggregate: 'count'}
                ]
            },
            pageSize: 100
        },
        resizable: true,
        scrollable: true,
        sortable: {
            mode: "single",
            allowUnsort: false
        },
        pageable: {
            refresh: true,
            buttonCount: 5
        },
        selectable: "multiple cell",
        filterable: {
            mode: "row"
        },
        columnMenu: true,
        columns: columnsMetadata,
        change: onChange

    };


    gridElement.kendoGrid($.extend({
        dataBound: function(e) {
            var columns = e.sender.columns;
            var dataItems = e.sender._data;

            for(index in classStyle){
                var columnIndex = 1;
                for (var j = 0; j < columns.length; j++) {
                    if(columns[j].field == index){
                        break;
                    }
                    columnIndex++;
                }
                for (var j = 0; j < dataItems.length; j++) {
                    var units = dataItems[j].get(index);
                    var row = e.sender.tbody.find("[data-uid='" + dataItems[j].uid + "']");
                    var cell = row.children().eq(columnIndex);
                    cell.addClass(getCellColorClass(units, index));
                }
            }
            renderButton();
        }
    }, configuration));

    $(".checkbox").bind("change", function (e) {
        $(e.target).closest("tr").toggleClass("k-state-selected");
    });



    function renderButton(){
        for(number in idMas){
            var id = idMas[number].id;
            var button = buttonsMetadata[idMas[number].numberButton];
            $(kendo.format('#{0}', id)).kendoButton({
                imageUrl: button.icon,
                click: button.handler
            });
        }
    }

});



