export default {
    "label": "Comments",
    "id": "comments",
    "parent": "content",
    "summary": "This enables commenting on given URL. For more customizability, c/o [getComments](/docs/functions/getComments), [addComment](/docs/functions/addComment), and [removeComment](/docs/functions/removeComment).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
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
    }],
    "otherAttributes" : {
        "noCommentsMessageText" : "No comments yet. Be the first person to say something.",
        "commentsInputPlaceholder" : "Write your comment here...",
        "submitButtonText" : "Continue",
        "clearButtonText" : "Clear",
        "loginButtonText" : "Login to write a comment",
        "unknowUserText" : "Unknown User",
        "commentEditButtonText" : "Edit",
        "commentDeleteButtonText" : "Delete",
        "commentSaveButtonText" : "Save",
        "commentDeleteConfirmationText" : "Are you sure to delete this item?",
        "commentCountText" : "%s comment(s)",
        "commentTimeNowText" : "Now",
        "commentTimeSecondsText" : "%s second(s) ago",
        "commentTimeMinutesText" : "%s minute(s) ago",
        "commentTimeHoursText" : "%s hour(s) ago",
        "commentTimeDaysText" : "%s day(s) ago",
        "commentTimeWeeksText" : "%s week(s) ago",
        "commentTimeMonthsText" : "%s month(s) ago",
        "commentTimeYearsText" : "%s year(s) ago"
    }
}