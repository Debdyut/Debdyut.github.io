/************************Add changable configurations here****************************/
var accessToken = "c384aef3e73e4e0688913b0e7c5ef5e7";

var baseUrl = "https://api.api.ai/v1/";

let config = {
    //API server URL
    site_root : "https://console.dialogflow.com/api-client/demo/embedded/46fdf1c0-63c2-4f8a-9369-c4624d801cee",

    //API endpoint
    request_endpoint : "/demoQuery",

    request_payload : function (text='',session_id=null) {
        return {
            Text: text,
            session_id: session_id
        }
    },
    //API response payload name
    response_name : 'Reply'
}
