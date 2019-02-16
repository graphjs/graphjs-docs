export default {
    "label": "Auth: State",
    "id": "auth-state",
    "parent": "auth",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. The difference of this tag from **graphjs-auth** is that the components in this tag appear in a lightbox, vs. the components in the **graphjs-auth-state** appear inline. If you need more customizability, please refer to [showLogin](/docs/functions/showLogin), [showRegister](/docs/functions/showRegister).",
    "specs": [{
        "type": "radio",
        "key": "box",
        "label": "Box",
        "tooltip": "Box attribute is added by default",
        "value": "disabled",
        "options": [{
            "label": "Disabled",
            "value": "disabled"
        },{
            "label": "Enabled",
            "value": "enabled"
        }]
    },{
        "type": "textwithcheckbox",
        "key": "default-avatar",
        "label": "Default Avatar",
        "tooltip": "Provide the default image URL for avatar"
    }]
}