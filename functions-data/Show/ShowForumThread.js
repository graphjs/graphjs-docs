export default {
    "label": "showForumThread",
    "id": "showForumThread",
    "parent": "show",
    "summary": "A javascript call to display a single forum thread modal. Part of the Forum family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Thread ID is required",
        "value": "50a5a634eed9d6dad5f64daa3bef6587"
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