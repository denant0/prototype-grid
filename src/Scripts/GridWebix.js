
var columnsMetadata = require('../Scripts/Metadata/Columns/ColumnsWebixMetadata');
var data= require('../Scripts/Dataset/Data');

webix.ready(function(){

    dtable = new webix.ui({
        container:"grid",
        view:"datatable",       
        columns: columnsMetadata,

        pager:{
            template:"{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",
            container: 'paging',
            size: 100,
            group: 5
        },
        select: "cell",
        multiselect: true,
        on:{
            onSelectChange:function(){
                var id = dtable.getSelectedId(true);
                var text = dtable.getItem(id)[id[0].column];

                document.getElementById('select').innerHTML = text;
            }
        },
        on_click: event,

        data: data.data
    });
    webix.event(window, "resize", function(){dtable.adjust()});


    dtable.on_click.editclass = function(grid, rowIndex, colIndex) {
        webix.message('You click button 1');
    };
    dtable.on_click.deleteclass = function(grid, rowIndex, colIndex) {
        webix.message('You click button 2');
    };
    dtable.on_click.addclass = function(grid, rowIndex, colIndex) {
        webix.message('You click button 3');
    };
    dtable.on_click.infoclass = function(grid, rowIndex, colIndex) {
        webix.message('You click button 4');
    };
})



