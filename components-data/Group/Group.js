export default {
    "label": "Group",
    "id": "group",
    "parent": "group",
    "summary": "With Groups, members can form micro-communities/teams that share a common interest and/or passion. The difference of this tag from **graphjs-group-card** is that this one also shows members.  For more customizability, please refer to [showGroup](/docs/functions/showGroup), [showGroupCreator](/docs/functions/showGroupCreator), [setGroupCover](/docs/functions/setGroupCover), [setGroupDescription](/docs/functions/setGroupDescription), [setGroupTitle](/docs/functions/setGroupTitle), [listMembers](/docs/functions/listMembers), [listGroups](/docs/functions/listGroups), [leaveGroup](/docs/functions/leaveGroup), [joinGroup](/docs/functions/joinGroup), [getGroup](/docs/functions/getGroup), and [createGroup](/docs/functions/createGroup).",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Group identification number is required",
        "value": "33365d758357b6e724c360272ebf8895"
    },{
        "type": "textwithcheckbox",
        "key": "default-avatar",
        "label": "Default Avatar",
        "tooltip": "Provide the Default Image URL for Avatar"
    }]
}