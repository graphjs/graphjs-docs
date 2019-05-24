export default {
    "label": "setGroupTitle",
    "id": "setGroupTitle",
    "parent": "groupApiFunctions",
    "summary": "An active-session-dependent javascript call to set the title of a particular group programmatically.  See also [createGroup](/docs/functions/createGroup), [listGroups](/docs/functions/listGroups), [joinGroup](/docs/functions/joinGroup), [getGroup](/docs/functions/getGroup), [listMembers](/docs/functions/listMembers), [setGroupCover](/docs/functions/setGroupCover), [setGroupDescription](/docs/functions/setGroupDescription), [leaveGroup](/docs/functions/leaveGroup), [deleteGroup](/docs/functions/deleteGroup). Part of the Group family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Group ID is required"
    }, {
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "A title is required"
    }]
}