function showMenu(event) {
    $("#contextMenu").css("margin-left",event.pageX);
    $("#contextMenu").css("margin-top",event.pageY);
    $("#contextMenu").fadeIn('fast');
}

function hideMenu(){
    $("#contextMenu").hide();
}

$("#contextMenu li").click(function(){
   $("#contextMenu").hide();
});