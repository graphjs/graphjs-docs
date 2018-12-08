export default {
    "label": "Messages",
    "id": "messages",
    "parent": "messages",
    "summary": "Messaging is a crucial component of social interactions. The graphjs-messages family enable on-site communications. You may use it simply as a self-contained Contact form to email the author of the web site, or as a full-blown messaging infrastructure for your community. If you need more customizability, please refer to [showMessages](/docs/functions/showMessages), [getInbox](/docs/functions/getInbox), [getConversations](/docs/functions/getConversations), [getOutbox](/docs/functions/getOutbox), [getConversation](/docs/functions/getConversation), and [countUnreadMessages](/docs/functions/countUnreadMessages).",
    "specs": [{
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
        "tooltip": "Provide the Default Image URL for Avatar"
    }],
    "otherAttributes": {
        "nameSearchPlaceholder" : "Type a name...",
        "messageInputPlaceholder": "Write your message here...",
        "loginButtonText" : "Login to display messages",
        "messageTimeNowText" : "Now",
        "messageTimeSecondsText" : "%s second(s) ago",
        "messageTimeMinutesText" : "%s minute(s) ago",
        "messageTimeHoursText" : "%s hour(s) ago",
        "messageTimeDaysText" : "%s day(s) ago",
        "messageTimeWeeksText" : "%s week(s) ago",
        "messageTimeMonthsText" : "%s month(s) ago",
        "messageTimeYearsText" : "%s year(s) ago",
        "failErrorText" : "Error: Couldn't send message"
    }
}