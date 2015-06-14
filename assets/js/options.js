var align_left = $("#align_left");
var align_right = $("#align_right");
var align_center = $("#align_center");
var align_justify = $("#align_justify");
var font_family = $("#font-family");
var font_size = $("#font-size");
var bg_color = $("#bg-color");
var italic = $("#italic");
var bold = $("#bold");
var underline = $("#underline");
var font_color = $("#font-color");
var c_picker = $("#c_picker");
var bg_color = $("#bg_color");
var bg_btn = $("#bg_color_btn");
align_left.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("text-align", "left");
        }
    }
});
align_center.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("text-align", "center");
        }
    }
});
align_right.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("text-align", "right");
        }
    }
});
align_justify.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("text-align", "justified");
        }
    }
});
font_family.change(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("font-family", $(this).val());
        }
    }
});
font_size.change(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("font-size", $(this).val() + "px");
        }
    }
});
bg_color.change(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("background-color", "#" + $(this).val());
            $("td[addr='" + selected[i] + "']").attr("before-color","#"+ $(this).val());
        }
    }
});

bold.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("font-weight", "bold");
        }
    }
});

underline.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("text-decoration", "underline");
        }
    }
});

italic.click(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("font-style", "italic");
        }
    }
});

font_color.click(function () {
    c_picker.click();
});
bg_btn.click(function () {
    bg_color.click();
});
c_picker.change(function () {
    if (selected.length > 0) {
        for (var i = 0; i < selected.length; i++) {
            $("td[addr='" + selected[i] + "']").css("color", $(this).val());
        }
    }
});