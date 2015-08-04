var data= require('../Scripts/Dataset/Data');
var modelMetadata = require('../Scripts/Metadata/Model/ModelKendoMetadata');
var columnsMetadata = require('../Scripts/Metadata/Columns/ColumnsMetadata').ColumnsKendo;

var classStyle = require('../Scripts/Metadata/Enumeration').ClassStyle;
var dataIndex = require('../Scripts/Metadata/Enumeration').DataIndex;


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

    function getUnitsInStockClass(val) {
        var currentEnumStyle = classStyle['CountryCode'];
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
            var columnIndex = 0;
            for (var j = 0; j < columns.length; j++) {
                if (columns[j].field == "CountryCode") {
                    break;
                }
                columnIndex++;
            }
            var dataItems = e.sender._data;
            for (var j = 0; j < dataItems.length; j++) {
                var units = dataItems[j].get("CountryCode");

                var row = e.sender.tbody.find("[data-uid='" + dataItems[j].uid + "']");

                var cell = row.children().eq(columnIndex + 1);
                cell.addClass(getUnitsInStockClass(units));
            }
        }
    }, configuration));
});



