export default {
    "label": "Forum: Composer",
    "id": "forum-composer",
    "parent": "forumTags",
    "summary": "The graphjs-forum family of tags are important in adding a sense of community to your web site by enabling many-to-many communications. The **graphjs-forum-composer** tag allows you to embed a forum composer on any webpage you'd like. If you need more customizability, please refer to [startThread](/docs/functions/startThread).",
    "specs": [{
        "type": "text",
        "key": "title",
        "label": "Title",
        "placeholder": "New Thread"
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