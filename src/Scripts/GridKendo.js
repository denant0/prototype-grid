var data= require('../Scripts/Dataset/Data');
var modelMetadata = require('../Scripts/Metadata/ModelMetadata').ModelExtJs;
var columnsMetadata = require('../Scripts/Metadata/ColumnsMetadata').ColumnsKendo;

$(document).ready(function () {

    function onChange(arg) {
        var selected = $.map(this.select(), function(item) {
            var test = item.cellIndex +','+ item.innerHTML;
            return test;
        });

        kendoConsole.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }


    $("#gridContainer").kendoGrid({
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
        height: 550,
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
    });
});
