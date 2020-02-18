export default {
    "label": "Auth: Login",
    "id": "auth-login",
    "parent": "authTags",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. This tag is responsible for registration/sign up. If the user does not have an account yet, they may follow the login link inside this tag, which would appear in a lightbox. If you need more customizability, and  add signup function programmatically, please refer to [showLogin](/docs/functions/showLogin), and [login](/docs/functions/login).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    },{
        "type": "radio",
        "key": "autofocus",
        "label": "AutoFocus",
        "value": "on",
        "tooltip": "If off, won't autofocus",
        "options": [{
            "label": "On",
            "value": "on"
        }, {
            "label": "Off",
            "value": "off"
        }]
    }]
}