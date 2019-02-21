export default {
    "label": "commentBlogPost",
    "id": "commentBlogPost",
    "parent": "blogApiFunctions",
    "summary": "A javascript call to add a comment on the blog post programmatically. See also [getBlogComments](/docs/functions/getBlogComments), [editBlogComment](/docs/functions/editBlogComment), [removeBlogComment](/docs/functions/removeBlogComment). Part of the Blog Comments family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "ID",
        "placeholder": "ID is required",
        "value": "5a5b77c638fe706999a9f65c8820f6b1"
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "Content is required",
        "value": "This is a test comment."
    }]
}