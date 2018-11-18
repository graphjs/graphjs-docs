export default {
    "label": "Profile: List",
    "id": "profile-list",
    "parent": "profile",
    "summary": "Lists all available profile cards. For more customizability, c/o [listMembers](/docs/functions/listMembers).",
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
    }],
    "otherAttributes" : {
        "loginButtonText":"Login to display content"
    }
}