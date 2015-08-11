var dataIndex = require('../Enumeration').DataIndex;

function isDisabledButton(view, rowIndex, colIndex, item, record){
    for(conditionNumber in item.condition) {
        var condition = item.condition[conditionNumber];
        if (record.data[condition.column] == condition.value) {
            return false;
        }
    }
    return true;
}

var buttonsMetada = [
    {
        icon: 'Style/icons/cog_edit.png',  // Use a URL in the icon config
        tooltip: 'Button 1',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 1');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ],
        isDisabled:isDisabledButton
    },{
        icon: 'Style/icons/delete.gif',
        tooltip: 'Button 2',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 2');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ],
        isDisabled:isDisabledButton
    },{
        icon: 'Style/icons/add.gif',
        tooltip: 'Button 3',
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
            },
        ],
        isDisabled:isDisabledButton
    },{
        icon: 'Style/icons/information.png',
        tooltip: 'Button 4',
        handler: function(grid, rowIndex, colIndex) {
            alert('You click button 4');
        },
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ],
        isDisabled:isDisabledButton
    }
];

module.exports = buttonsMetada;
