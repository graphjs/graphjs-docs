export default {
    "label": "getBlogPosts",
    "id": "getBlogPosts",
    "parent": "blogApiFunctions",
    "summary": "A javascript call to get all blog posts programmatically. See below for a sample response. See also [startBlogPost](/docs/functions/startBlogPost), [getBlogPost](/docs/functions/getBlogPost), [ediBlogPost](/docs/functions/ediBlogPost), [removeBlogPost](/docs/functions/removeBlogPost). Part of the Blog family of tags/calls.",
    "specs": [{
        "type": "text",
        "key": "order",
        "label": "Order",
        "placeholder": "Optional. Possible values are either \"asc\" (ascending) or \"desc\" (descending).",
        "value": "desc"
    }]
}
