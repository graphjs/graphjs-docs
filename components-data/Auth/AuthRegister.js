export default {
    "label": "Auth: Register",
    "id": "auth-register",
    "parent": "auth",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. This tag is responsible for registration/sign up. If the user does not have an account yet, they may follow the login link inside this tag, which would appear in a lightbox. If you need more customizability, and  add signup function programmatically, please refer to [showRegister](/docs/functions/showRegister), and [register](/docs/functions/register).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "tooltip": "You may show a title above the registration box",
        "label": "Title"
    }],
    "otherAttributes" : {
        "usernamePlaceholder":"Choose a nickname",
        "emailPlaceholder":"Enter email address",
        "passwordPlaceholder":"Set password",
        "confirmPasswordPlaceholder":"Confirm password",
        "submitButtonText":"Register",
        "loginLinkText": "Already a member?",
        "usernameMinLengthErrorText":"Username is too short!",
        "usernameMaxLengthErrorText":"Username must be %s characters maximum!",
        "usernamePatternErrorText":"Username is invalid. Valid characters are letters, numbers, hyphens, and underscores.",
        "emailPatternErrorText":"Email is invalid. Valid format: user@site.com",
        "passwordMinLengthErrorText":"Password must be %s characters minimum!",
        "passwordMaxLengthErrorText":"Password must be %s characters maximum!",
        "passwordMatchErrorText":"Passwords do not match."
    }
}