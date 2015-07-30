$(function ()
{
    var data = require('./Dataset/Data');
    var columnsMetadata = require('./Metadata/ColumnsMetadata').ColumnsDevExpress;

    var initialContainerHeight = $("#gridContainer").height();

    function onResize(){
        var dataGrid = $('#gridContainer').dxDataGrid('instance');
        dataGrid.option({
            height: $(window).height() - 10
        });
    }

    function gridHeight(){
       return $(window).height() - 10;
    }

    $(window).resize(function(){
        onResize();
    });

    $("#gridContainer").dxDataGrid({
        dataSource: data.data,
        columns: columnsMetadata,
        allowColumnReordering: true,
        allowColumnResizing: true,
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20, 50, 100 ]
        },
        paging: {
            pageSize: 100
        },
        groupPanel: {
            visible: true
        },
        summary: {
            groupItems: [{
                column: 'AssetType',
                summaryType: 'count',
                displayFormat: 'Sum: {0}'
            }]
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        headerFilter: {
            visible: true
        },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: 'Search...'
        },
        selection: {
            mode: 'multiple'
        },
        onCellClick: function (clickedCell) {
            var elem = clickedCell;
            $('#details').show();
            $('#cell').text("Cell: " + clickedCell.columnIndex);
            $('#row').text("Row: " + clickedCell.rowIndex);
        },
        height: gridHeight
    });
});
