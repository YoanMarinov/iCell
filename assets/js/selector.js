var ctrlPressed = false;
var shiftPressed = false;
var selected = [];
$("body").keydown(function (e) {
    if (e.keyCode == 17) {
        ctrlPressed = true;
        console.log('pressed_ctrl');
    }
    if (e.keyCode == 16) {
        shiftPressed = true;
        console.log('pressed_Shift');
    }
});
$("body").keyup(function (e) {
    if (e.keyCode == 17) {
        ctrlPressed = false;
        console.log('released_ctrl');
    }
    if (e.keyCode == 16) {
        shiftPressed = false;
        console.log(selected);
        console.log('released_shift');
    }
});
function clearSelected(){
    for(var i=0;i<selected.length;i++){
        var elem = $("td[addr='"+selected[i]+"']");
        if(elem.attr("before-color")){
            elem.css("background-color",elem.attr("before-color"));
        }else{
            elem.css("background-color","");
        }
    }
    selected = [];
}