export default {
    "label": "showForum",
    "id": "showForum",
    "parent": "forumDisplayFunctions",
    "summary": "A javascript call to display a forum modal. Part of the Forum family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "Multiple Titles (as default)"
    }, {
        "type": "radio",
        "key": "access",
        "label": "Access",
        "value": "public",
        "options": [{
            "label": "Public",
            "value": "public"
        }, {
            "label": "Private",
            "value": "private"
        }]
    }]
}