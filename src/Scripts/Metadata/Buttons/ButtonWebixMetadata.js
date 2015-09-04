var dataIndex = require('../Enumeration').DataIndex;

var buttonsMetadata = [
    {
        icon: 'Style/icons/cog_edit.png',
        class: 'editclass',
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    },{
        icon: 'Style/icons/delete.gif',
        class: 'deleteclass',
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    },{
        icon: 'Style/icons/add.gif',
        class: 'addclass',
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
        class: 'infoclass',
        condition: [
            {
                column: dataIndex.AssetType,
                value: 'bl'
            }
        ]
    }
];




module.exports.Button = buttonsMetadata;

