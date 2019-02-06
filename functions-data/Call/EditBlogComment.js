export default {
    "label": "editBlogComment",
    "id": "editBlogComment",
    "parent": "call",
    "summary": "A javascript call to edit a comment on the blog post programmatically. See also [getBlogComments](/docs/functions/getBlogComments), [commentBlogPost](/docs/functions/commentBlogPost), [removeBlogComment](/docs/functions/removeBlogComment). Part of the Blog Comments family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "ID",
        "placeholder": "ID is required",
        "value": ""
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "Content is required",
        "value": ""
    }]
}