export default {
    "label": "Forum",
    "id": "forum",
    "parent": "forum",
    "summary": "The graphjs-forum family of tags are important in adding a sense of community to your web site by enabling many-to-many communications. The difference of this tag from **graphjs-forum-list** is that the components in this tag (e.g. threads, replies etc.) appear inline, vs. the components in the **graphjs-forum-list** appear in a lightbox. If you need more customizability, please refer to [showForum](/docs/functions/showForum), [getThreads](/docs/functions/getThreads), and [startThread](/docs/functions/startThread).",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "Multiple Titles (as default)"
    }, {
        "type": "radio",
        "key": "access",
        "label": "Access",
        "tooltip": "When it's private, one has to be logged in to see the list of the threads.",
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
    }]
}