
var columnsMetadata = require('../Scripts/Metadata/Columns/ColumnsWebixMetadata');
var data= require('../Scripts/Dataset/Data');

webix.ready(function(){

    dtable = new webix.ui({
        container:"grid",
        view:"treetable",
        columns: columnsMetadata,
        pager:{
            template:"{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",
            container: 'paging',
            size: 100,
            group: 5,
            animate:{
                subtype:"in"
            }
        },
        select: "cell",
        multiselect: true,
        resizeColumn:true,
        on:{
            onSelectChange:function(){
                var id = dtable.getSelectedId(true);
                var text = dtable.getItem(id)[id[0].column];

                document.getElementById('select').innerHTML = text;
            }
        },
        scheme:{
            $group:'AssetType',
            $sort: 'AssetType'

        },
        ready:function(){
            this.open(this.getFirstId());
        },
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
/*
webix.ready(function(){
    grida = webix.ui({
        container:"grid",
        view:"treetable",
        columns:[
            { id:"id",	header:"", css:{"text-align":"right"},  	width:50},
            { id:"value",	header:"Film title",	width:250,
                template:"{common.treetable()} #value#" },
            { id:"chapter",	header:"Mode",	width:200}
        ],
        autoheight:true,
        autowidth:true,

        data: [
            { "id":"1", "value":"The Shawshank Redemption", "open":true, "data":[
                { "id":"1.1", "value":"Part 1", "chapter":"alpha"},
                { "id":"1.2", "value":"Part 2", "chapter":"beta", "open":true, "data":[
                    { "id":"1.2.1", "value":"Part 1", "chapter":"beta-twin"},
                    { "id":"1.2.2", "value":"Part 1", "chapter":"beta-twin"}
                ]},
                { "id":"1.3", "value":"Part 3", "chapter":"gamma" }
            ]},
            { "id":"2", "value":"The Godfather", "data":[
                { "id":"2.1", "value":"Part 1", "chapter":"alpha" },
                { "id":"2.2", "value":"Part 2", "chapter":"beta" }
            ]}
        ]
    });
});
*/



