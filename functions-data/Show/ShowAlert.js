export default {
    "label": "showAlert",
    "id": "showAlert",
    "parent": "show",
    "summary": "A javascript call to display a blocking modal with the aim to force the viewer to either log in or sign up. This may be used in parts of the web site where the content would be hidden from non-members. Part of the Authentication family of tags/calls.",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title",
        "value": "Login Required"
    }, {
        "type": "text",
        "key": "message",
        "label": "Message",
        "placeholder": "A message is required",
        "value": "You need to login to view the group details."
    }, {
        "type": "textwithcheckbox",
        "key": "affirmative",
        "label": "Affirmative",
        "placeholder": "Done",
        "value": "Login"
    }, {
        "type": "textwithcheckbox",
        "key": "negative",
        "label": "Negative",
        "value": "Cancel"
    }, {
        "type": "radiowithcheckbox",
        "key": "show",
        "label": "Show",
        "value": "login",
        "options": [{
            "label": "Login",
            "value": "login"
        }, {
            "label": "Register",
            "value": "register"
        }]
    }]
}