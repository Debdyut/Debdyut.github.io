function getreply(message){

    
    if (true) { 
        showWaitFiller();

        var senddata = config.request_payload(message);
    
        $.ajax({
            type: "POST",
            url: baseUrl + "query?v=20150910",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            data: JSON.stringify({ query: message, lang: "en", sessionId: "somerandomthing" }),
            success: function(data){
                removeWaitFiller();
                Bubble(JSON.stringify(data.result.fulfillment.speech, undefined, 2),BubbleType.RECIEVE);
            },
            error: function(data) {
                console.error("Error");
            }
        });
    }
    
    else{
        console.error("Invalid API URL!!!");
    }
    
}

function validateUrl(url){
    var re = /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/g; 
    return re.test(url);
}
