export default {
    "label": "Star: Button",
    "id": "star-button",
    "parent": "contentTags",
    "summary": "Positive reactions are an important part of enabling social interactions on your web site. The star-family of tags enable liking/upvoting of any URL. This tag is the star button. Please note, this tag comes with a caveat; if there are multiple buttons on the same page, it won't update automatically with others, so try to use one button at a page for a flawless experience to your users. For more customizability, c/o [star](/docs/functions/star), and [removeStar](/docs/functions/removeStar).",
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
    },{
        "type": "radio",
        "key": "hide-zero",
        "label": "Hide Zero",
        "value": "off",
        "tooltip": "If on, hide the button while it's zero",
        "options": [{
            "label": "On",
            "value": "on"
        }, {
            "label": "Off",
            "value": "off"
        }]
    },
    {
        "type": "text",
        "key": "href",
        "label": "Hyperlink Reference",
        "tooltip": "URL. Current address, if empty."
    },
    {
        "type": "text",
        "key": "authentication-text",
        "label": "Authentication Text",
        "tooltip": "The title to show if the user is not logged in."
    },
    ]
}