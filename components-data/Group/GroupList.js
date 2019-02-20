export default {
    "label": "Group: List",
    "id": "group-list",
    "parent": "groupTags",
    "summary": "Lists all available groups. For more customizability, c/o [listGroups](/docs/functions/listGroups).",
    "specs": [{
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