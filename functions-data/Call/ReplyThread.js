export default {
    "label": "replyThread",
    "id": "replyThread",
    "parent": "call",
    "summary": "A javascript call to reply an existing forum thread programmatically. See below for a sample response. See also [getThread](/docs/functions/getThread), [getThreads](/docs/functions/getThreads), [replyThread](/docs/functions/replyThread), [removeReply](/docs/functions/removeReply). Part of the Forum family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Thread ID is required",
        "value": "50a5a634eed9d6dad5f64daa3bef6587"
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "Message is required",
        "value": "This is a test reply."
    }]
}