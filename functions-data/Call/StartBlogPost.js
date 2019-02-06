export default {
    "label": "startBlogPost",
    "id": "startBlogPost",
    "parent": "call",
    "summary": "A javascript call to start a blog post programmatically. See below for a sample response. See also [getBlogPost](/docs/functions/getBlogPost), [getBlogPosts](/docs/functions/getBlogPosts), [editBlogPost](/docs/functions/editBlogPost), [removeBlogPost](/docs/functions/removeBlogPost). Part of the Blog family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "A title is required",
        "value": "Sample Blog Post"
    }, {
        "type": "text",
        "key": "content",
        "label": "Content",
        "placeholder": "A message is required",
        "value": "This is a test blog post."
    }]
}