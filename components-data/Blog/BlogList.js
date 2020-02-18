export default {
    "label": "Blog: List",
    "id": "blog-list",
    "parent": "blogTags",
    "summary": "This is used to display a list of available blogs. Unlike \"graphjs-blog\", this tag cannot handle indiviual blog entries, and would open blog entry links in modal dialog boxes.",
    "specs": [{
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