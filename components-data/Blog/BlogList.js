export default {
    "label": "Blog: List",
    "id": "blog-list",
    "parent": "blog",
    "summary": "This is used to display list of available blogs",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    }],
    "otherAttributes" : {
        "noPostText":"There isn't any post available.",
        "authorBeforeText" : "by"
    }
}