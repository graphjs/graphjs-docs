export default {
    "label": "Blog: Post",
    "id": "blog-post",
    "parent": "blogTags",
    "summary": "Shows any particular blog post with id",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Id",
        "placeholder": "Identification number is required",
        "value": "5a5b77c638fe706999a9f65c8820f6b1"
    },
    {
        "type": "radio",
        "key": "box",
        "label": "Box",
        "value": "enabled",
        "tooltip": "If disabled, won't display a box in the background",
        "options": [{
            "label": "Enabled",
            "value": "enabled"
        }, {
            "label": "Disabled",
            "value": "disabled"
        }]
    }]
}