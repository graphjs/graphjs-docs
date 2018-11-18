export default {
    "label": "Star: Button",
    "id": "star-button",
    "parent": "content",
    "summary": "Positive reactions are an important part of enabling social interactions on your web site. The star-family of tags enable liking/upvoting of any URL. This tag is the star button. For more customizability, c/o [star](/docs/functions/star), and [removeStar](/docs/functions/removeStar).",
    "specs": [{
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
    }]
}