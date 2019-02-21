export default {
    "label": "startThread",
    "id": "startThread",
    "parent": "forumApiFunctions",
    "summary": "A javascript call to start a forum thread programmatically. See below for a sample response. See also [getThread](/docs/functions/getThread), [getThreads](/docs/functions/getThreads), [replyThread](/docs/functions/replyThread), [removeReply](/docs/functions/removeReply). Part of the Forum family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "A title is required",
        "value": "Sample Thread"
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "A message is required",
        "value": "This is a test thread."
    }]
}