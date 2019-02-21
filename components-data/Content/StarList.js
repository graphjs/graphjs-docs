export default {
    "label": "Star: List",
    "id": "star-list",
    "parent": "contentTags",
    "summary": "Positive reactions are an important part of enabling social interactions on your web site. The star-family of tags enable liking/upvoting of any URL. This tag is lists all starred contents. For more customizability, c/o [getStar](/docs/functions/getStar), [getStars](/docs/functions/getStars), and [getUserStars](/docs/functions/getUserStars).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    }, {
        "type": "radio",
        "key": "scope",
        "label": "Scope",
        "value": "global",
        "options": [{
            "label": "Global",
            "value": "global"
        }, {
            "label": "User",
            "value": "user"
        }]
    }, {
        "type": "radio",
        "key": "type",
        "label": "Type",
        "value": "default",
        "options": [{
            "label": "Default",
            "value": "default"
        }, {
            "label": "Like",
            "value": "like"
        }, {
            "label": "Love",
            "value": "love"
        }, {
            "label": "Save",
            "value": "save"
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