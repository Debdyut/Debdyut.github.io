/*****************auto scrolling******************/
function scroll(){
    $("#message_area").animate({
        scrollTop:($("#message_area").get(0).scrollHeight)
    })
}

/*****************wait filler******************/ 
var _filler_template = $(`
    <div class="row justify-content-right">
        <div name="wait-filler" class="anim_res msg msg-left">
            <b class="msg reply effect"> 
                <span class="wait-filler">.</span> 
                <span class="wait-filler1">.</span>
                <span class="wait-filler2">.</span>
            </b>    
        </div>
    </div>
`);

function  showWaitFiller(){
    $("#message_area").append($(_filler_template));
}

function removeWaitFiller(){
  $('#message_area').find('[name~="wait-filler"]').remove();
}
