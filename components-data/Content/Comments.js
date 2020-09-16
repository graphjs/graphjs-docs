export default {
    "label": "Comments",
    "id": "comments",
    "parent": "contentTags",
    "summary": "This enables commenting on given URL. For more customizability, c/o [getComments](/docs/functions/getComments), [addComment](/docs/functions/addComment), and [removeComment](/docs/functions/removeComment).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    }, {
        "type": "textwithcheckbox",
        "key": "min-width",
        "label": "Minimum Width"
    }, {
        "type": "textwithcheckbox",
        "key": "max-width",
        "label": "Maximum Width",
        "value": "800px"
    }, {
        "type": "textwithcheckbox",
        "key": "min-height",
        "label": "Minimum Height"
    }, {
        "type": "textwithcheckbox",
        "key": "max-height",
        "label": "Maximum Height"
    },{
        "type": "textwithcheckbox",
        "key": "default-avatar",
        "label": "Default Avatar",
        "tooltip": "Provide the default image URL for avatar"
    },{
        "type": "textwithcheckbox",
        "key": "url",
        "label": "URL",
        "tooltip": "Default: current page"
    }]
}
