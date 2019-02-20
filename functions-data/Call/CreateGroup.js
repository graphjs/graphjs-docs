export default {
    "label": "createGroup",
    "id": "createGroup",
    "parent": "groupApiFunctions",
    "summary": "A javascript call to create a group programmatically.  See also [listGroups](/docs/functions/listGroups), [joinGroup](/docs/functions/joinGroup), [getGroup](/docs/functions/getGroup), [listMembers](/docs/functions/listMembers), [leaveGroup](/docs/functions/leaveGroup), [setGroupDescription](/docs/functions/setGroupDescription), [setGroupTitle](/docs/functions/setGroupTitle), [setGroupCover](/docs/functions/setGroupCover). Part of the Group family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "A title is required"
    }, {
        "type": "text",
        "key": "description",
        "label": "Description",
        "placeholder": "A description is required"
    }]
}