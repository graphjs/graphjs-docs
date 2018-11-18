export default {
    "label": "getActivityToken",
    "id": "getActivityToken",
    "parent": "call",
    "summary": "A javascript call to fetch a time-based token that would allow the developer to play with the stream APIs using a client like https://github.com/GetStream/stream-js.",
    "specs": [{
        "type": "radio",
        "key": "type",
        "label": "Type",
        "value": "user",
        "options": [{
            "label": "User",
            "value": "user"
        }, {
            "label": "Timeline",
            "value": "timeline"
        }]
    }, {
        "type": "text",
        "key": "id",
        "label": "Identification",
        "placeholder": "User ID is required",
        "value": "48760696099368953dd71a90b727acba"
    }]
}