export default {
    "label": "register",
    "id": "register",
    "parent": "authApiFunctions",
    "summary": "A javascript call to sign up programmatically. See also [showLogin](/docs/functions/showLogin), [login](/docs/functions/login), [logout](/docs/functions/logout), [reset](/docs/functions/reset). Part of the Authentication family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "username",
        "label": "Username",
        "placeholder": "A valid username is required"
    }, {
        "type": "text",
        "key": "email",
        "label": "Email",
        "placeholder": "A valid email is required"
    }, {
        "type": "password",
        "key": "password",
        "label": "Password",
        "placeholder": "A valid password is required"
    }]
}