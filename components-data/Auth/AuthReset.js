export default {
    "label": "Auth: Reset",
    "id": "auth-reset",
    "parent": "auth",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. This tag is responsible for registration/sign up. If the user does not have an account yet, they may follow the login link inside this tag, which would appear in a lightbox. If you need more customizability, and  add signup function programmatically, please refer to [showReset](/docs/functions/showReset), and [reset](/docs/functions/reset).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    }],
    "otherAttributes" : {
        "stepOneHeader" : "Step 1",
        "stepOneText" : "Please enter your email address.",
        "emailPlaceholder":"Email address",
        "submitEmailButtonText":"Continue",
        "registerLinkText": "Not registered?",
        "stepTwoHeader" : "Step 2",
        "stepTwoText" : "Please enter the 6-digit code we sent to your email.",
        "submitCodeButtonText":"Continue",
        "stepThreeHeader" : "Step 3",
        "stepThreeText" : "Please enter new password.",
        "passwordPlaceholder":"Enter new password",
        "confirmPasswordPlaceholder":"Confirm new password",
        "submitPasswordButtonText":"Update Password",
        "emailPatternErrorText":"Email is invalid. Valid format: user@site.com",
        "checkCodeErrorText":"All %s characters must be entered!'",
        "passwordMinLengthErrorText":"Password must be %s characters minimum!",
        "passwordMaxLengthErrorText":"Password must be %s characters maximum!",
        "passwordMatchErrorText":"Passwords do not match."
    }
}