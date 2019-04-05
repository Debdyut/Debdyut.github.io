let BubbleType = {
    SEND : true,
    RECIEVE: false
}
  
function Bubble(message,bubble_type)    {

// Choosing the template attributes based on the type of Bubble[SEND/RECIEVE]
if(bubble_type){
    var dialog_direction = "right";    
    var justify_direction = "end";
}
else{
    var justify_direction = "right";
    var dialog_direction = "left";
    var anim="";

}

message = message.replace(/\\"/g, '"');
message = message.replace(/["]+/g, '')
    
var _template_common = `
    <div class="row justify-content-${justify_direction}">
        <div class="msg msg-${dialog_direction}">
            <span class="msg-text">
            ${message}
            </span>
        </div>
    </div>    
`

$("#message_area").append($(_template_common));
scroll();
}
