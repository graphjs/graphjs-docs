export default {
    "label": "addComment",
    "id": "addComment",
    "parent": "contentApiFunctions",
    "summary": "A javascript call to add a comment programmatically. Comments are tied to the URL where they were called from. See also [getComments](/docs/functions/getComments), [removeComment](/docs/functions/removeComment). Part of the Comments family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "url",
        "label": "URL",
        "placeholder": "URL is required",
        "value": "https://my-website.com/my-webpage-with-graphjs-comments.html"
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "Content is required",
        "value": "This is a test comment."
    }]
}