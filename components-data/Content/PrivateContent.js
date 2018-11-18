export default {
    "label": "Private Content",
    "id": "private-content",
    "parent": "content",
    "summary": "You may want some contents of your site to be viewable by your members only, so they would not be public. This tag allows you to embed such private contents. By default, this tag inherits all its style from its parent, without any modifications, just like a **div** tag. For more customizability, c/o [addPrivateContent](/docs/functions/addPrivateContent), [editPrivateContent](/docs/functions/editPrivateContent), [getPrivateContent](/docs/functions/getPrivateContent), and [removePrivateContent](/docs/functions/removePrivateContent). Besides all the placeholder attributes shown below, you may also use **custom** as follows:",
    "summaryExample":`<graphjs-private-content id='xyz' placeholder='custom'>
    <img src='https://i.imgur.com/8B8ye29.jpg'/>
</graphjs-private-content>
    

`,
    "specs": [{
        "type": "text",
        "key": "id",
        "label": "Content ID",
        "value": "585d867a5a7304faafc434a7479e3250"
    },{
        "type": "radio",
        "key": "placeholder",
        "label": "Placeholder",
        "value": "mixed",
        "options": [{
            "label": "Text",
            "value": "text"
        }, {
            "label": "Image",
            "value": "image"
        }, {
            "label": "Video",
            "value": "video"
        }, {
            "label": "Album",
            "value": "album"
        }, {
            "label": "Mixed",
            "value": "mixed"
        }]
    }],
    "otherAttributes" : {
        "title" : "Private Content",
        "subTitle":"This is a private content.",
        "loginButtonText" : "Log in to view this content",
        "errorText" : "You can't view this content right now"
    }
}