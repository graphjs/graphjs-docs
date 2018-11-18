export default {
    "label": "setGroupDescription",
    "id": "setGroupDescription",
    "parent": "call",
    "summary": "An active-session-dependent javascript call to set the description of a particular group programmatically.  See also [createGroup](/docs/functions/createGroup), [listGroups](/docs/functions/listGroups), [joinGroup](/docs/functions/joinGroup), [getGroup](/docs/functions/getGroup), [listMembers](/docs/functions/listMembers), [setGroupCover](/docs/functions/setGroupCover), [setGroupTitle](/docs/functions/setGroupTitle), [leaveGroup](/docs/functions/leaveGroup). Part of the Group family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Group ID is required"
    }, {
        "type": "text",
        "key": "description",
        "label": "Description",
        "placeholder": "A description is required"
    }]
}