export default {
    "label": "Auth",
    "id": "auth",
    "parent": "auth",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. The difference of this tag from **graphjs-auth-state** is that the components in this tag appear inline, vs. the components in the **graphjs-auth-state** appear in a lightbox. If you need more customizability, please refer to [showLogin](/docs/functions/showLogin), [showRegister](/docs/functions/showRegister).",
    "specs": [{
        "type": "radio",
        "key": "position",
        "label": "Position",
        "tooltip": "Where should the pop-over position relative to the button itself",
        "value": "topleft",
        "options": [{
            "label": "Top Left",
            "value": "topleft"
        }, {
            "label": "Top Right",
            "value": "topright"
        }, {
            "label": "Bottom Left",
            "value": "bottomleft"
        }, {
            "label": "Bottom Right",
            "value": "bottomright"
        }]
    },{
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