export default {
    "label": "login",
    "id": "login",
    "parent": "authApiFunctions",
    "summary": "A javascript call to log in programmatically. See also [showLogin](/docs/functions/showLogin), [register](/docs/functions/register), [logout](/docs/functions/logout), [reset](/docs/functions/reset). Part of the Authentication family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "username",
        "label": "Username",
        "placeholder": "Username is required"
    }, {
        "type": "password",
        "key": "password",
        "label": "Password",
        "placeholder": "Password is required"
    }]
}