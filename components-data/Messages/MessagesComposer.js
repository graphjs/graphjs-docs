export default {
    "label": "Messages: Composer",
    "id": "messages-composer",
    "parent": "messages",
    "summary": "Messaging is a crucial component of social interactions. The graphjs-messages family enable on-site communications. You may use it simply as a self-contained Contact form to email the author of the web site, or as a full-blown messaging infrastructure for your community. If you need more customizability, please refer to [showMessagesComposer](/docs/functions/showMessagesComposer), and [sendMessage](/docs/functions/sendMessage).",
    "specs": [{
        "type": "text",
        "key": "to",
        "tooltip": "The Pho ID of the recipient.",
        "label": "To",
        "placeholder": "A user ID is required",
        "value": "48760696099368953dd71a90b727acba"
    }, {
        "type": "radio",
        "key": "anonymity",
        "label": "Anonymity",
        "tooltip": "When it's on, one doesn't have to logged in to send a message, so this may be used as an open contact form on the website.",
        "value": "off",
        "options": [{
            "label": "On",
            "value": "on"
        }, {
            "label": "Off",
            "value": "off"
        }]
    }, {
        "type": "textwithcheckbox",
        "key": "placeholder",
        "tooltip": "If enabled, shows a default message in the textarea.",
        "label": "Placeholder"
    }],
    "otherAttributes" : {
        "title" : "Send Message",
        "noRecipientText" : "No recipient",
        "emailPlaceholder" : "Enter your email address",
        "messagePlaceholder" : "Write your message here...",
        "submitButtonText" : "Send Message",
        "clearButtonText" : "Clear",
        "loginButtonText" : "Login to send message",
        "emailPatternErrorText":"Email is invalid. Valid format: user@site.com"
    }
}