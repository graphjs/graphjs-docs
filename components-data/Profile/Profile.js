export default {
    "label": "Profile",
    "id": "profile",
    "parent": "profileTags",
    "summary": "Profiles enable members/readers of your website to learn more about each other. The difference of this tag from **graphjs-profile-card** is that this one contains more information, such as an activity stream and list of followers.  For more customizability, please refer to [showProfile](/docs/functions/showProfile), [follow](/docs/functions/follow), [getFollowers](/docs/functions/getFollowers), [getFollowing](/docs/functions/getFollowing), [unfollow](/docs/functions/unfollow), [getProfile](/docs/functions/getProfile), [setAvatar](/docs/functions/setAvatar), [setBio](/docs/functions/setBio), [setBirthday](/docs/functions/setBirthday), [setEmail](/docs/functions/setEmail), [setPassword](/docs/functions/setPassword), [setProfile](/docs/functions/setProfile), and [setUsername](/docs/functions/setUsername).",
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "A user ID is required",
        "value": "48760696099368953dd71a90b727acba"
    },{
        "type": "textwithcheckbox",
        "key": "default-avatar",
        "label": "Default Avatar",
        "tooltip": "Provide the default image URL for avatar"
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