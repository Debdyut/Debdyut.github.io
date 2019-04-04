$("#chat_trigger").click(function() {
    $("#chatbot_container").toggle();  
    update_msg_area_size(); 
    $("body").css("overflow", "hidden");
});

$("#close_button").click(function() {
    $("#chatbot_container").toggle();   
    $("body").css("overflow-y", "visible");        
    $("body").css("overflow-x", "hidden");         
});

$('#message_area').on('mousewheel DOMMouseScroll', function (event) {

    console.log("triggered");

    $('#message_area').css("overflow-y", "auto");
    setTimeout(function () { $('#message_area').css("overflow-y", "hidden"); }, 500);

});


$("#send-button").click(sendMessage);

function sendMessage() {
    var message = softenInput($("#txt-input").val());
    if (message.trim() != '') {
        Bubble(message, BubbleType.SEND);
        getreply(message);
        $('#message_area').scrollTop($('#message_area')[0].scrollHeight - $('#message_area')[0].clientHeight);
        $("#txt-input").val("");
    }
}

$(document).keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        sendMessage();
    }
});


function softenInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


$(document).ready(function () {    

    $("#chatbot_container").toggle();

    window.scrollTo(0, 0);

});

$(window).on('resize', function () {
    update_msg_area_size();
});


function update_msg_area_size() {

    var header_h = $(".header").height();
    console.log(header_h);

    var footer_h = $(".input-area").height();
    console.log(footer_h);

    console.log($(window).height());

    $("#message_area").css("margin-top");

    $("#message_area").css("height", $(window).height() - footer_h - header_h - 10);

    $('#message_area').scrollTop($('#message_area')[0].scrollHeight - $('#message_area')[0].clientHeight);

}
