export default {
    "label": "Forum: Thread",
    "id": "forum-thread",
    "parent": "forum",
    "summary": "The graphjs-forum family of tags are important in adding a sense of community to your web site by enabling many-to-many communications. The **graphjs-forum-thread** tag allows you to embed a single forum thread on any webpage you'd like. Users may reply the thread inline. If you need more customizability, please refer to [showForumThread](/docs/functions/showForumThread), [getThread](/docs/functions/getThread), and [replyThread](/docs/functions/replyThread).",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "Identification number is required",
        "value": "50a5a634eed9d6dad5f64daa3bef6587"
    }, {
        "type": "radio",
        "key": "access",
        "label": "Access",
        "value": "public",
        "options": [{
            "label": "Public",
            "value": "public"
        }, {
            "label": "Private",
            "value": "private"
        }]
    }, {
        "type": "textwithcheckbox",
        "key": "min-width",
        "label": "Minimum Width"
    }, {
        "type": "textwithcheckbox",
        "key": "max-width",
        "label": "Maximum Width",
        "value": "800px"
    }, {
        "type": "textwithcheckbox",
        "key": "min-height",
        "label": "Minimum Height"
    }, {
        "type": "textwithcheckbox",
        "key": "max-height",
        "label": "Maximum Height"
    },{
        "type": "textwithcheckbox",
        "key": "default-avatar",
        "label": "Default Avatar",
        "tooltip": "Provide the default image URL for avatar"
    }]
}