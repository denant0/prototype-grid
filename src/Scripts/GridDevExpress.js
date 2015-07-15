$(function ()
{
    var data = require('./Dataset/Data');
    var columnsMetadata = require('./Metadata/ColumnsMetadata').ColumnsDevExpress;
    $("#gridContainer").dxDataGrid({
        dataSource: data.data,
        columns: columnsMetadata,
        allowColumnReordering: true,
        allowColumnResizing: true,
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20, 50]
        },
        sortByGroupSummaryInfo: [{
            summaryItem: 'count'
        }],
        groupPanel: {
            visible: true,
            allowColumnDragging: false
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
        }
    });
});
