export default {
    "label": "setGroupCover",
    "id": "setGroupCover",
    "parent": "call",
    "summary": "An active-session-dependent javascript call to set the cover image of a particular group programmatically.  See also [createGroup](/docs/functions/createGroup), [listGroups](/docs/functions/listGroups), [joinGroup](/docs/functions/joinGroup), [getGroup](/docs/functions/getGroup), [listMembers](/docs/functions/listMembers), [setGroupDescription](/docs/functions/setGroupDescription), [setGroupTitle](/docs/functions/setGroupTitle), [leaveGroup](/docs/functions/leaveGroup). Part of the Group family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Group ID is required"
    }, {
        "type": "text",
        "key": "cover",
        "label": "Cover",
        "placeholder": "Message is required",
        "value": "A valid image URL is required"
    }]
}