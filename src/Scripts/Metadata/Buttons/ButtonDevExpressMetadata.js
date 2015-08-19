var dataIndex = require('../Enumeration').DataIndex;

var buttonsMetadata = [
    {
        icon: 'Style/icons/cog_edit.png',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 1');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    },{
        icon: 'Style/icons/delete.gif',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 2');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    },{
        icon: 'Style/icons/add.gif',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 3');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            },
            {
                column: dataIndex.AssetType,
                value: 'eq'
            }
        ]
    },{
        icon: 'Style/icons/information.png',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 4');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    }
];

module.exports = buttonsMetadata;
