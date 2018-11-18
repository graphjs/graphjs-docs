export default {
    "label": "sendAnonymousMessage",
    "id": "sendAnonymousMessage",
    "parent": "call",
    "summary": "A javascript call to send a private message programmatically. The difference of this function from sendMessage is that this lets non-members to message a member. Use cautiously. Part of the Messages family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "sender",
        "label": "Sender",
        "placeholder": "An email in string format",
        "value": "some@dude.com"
    }, {
        "type": "text",
        "key": "to",
        "label": "To",
        "placeholder": "User ID is required",
        "value": "48760696099368953dd71a90b727acba"
    }, {
        "type": "text",
        "key": "message",
        "label": "Message",
        "placeholder": "A message is required"
    }]
}