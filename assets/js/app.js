//DIVS
var main = $("#main");
var win = $(window);
var table = $("#table");
var doc = $(document);
var new_table = $("#new_table");


var max_column;
var max_row;
doc.ready(function () {
    main.css("height", win.height());
    main.css("width", win.width());
    table.css("height", win.height() - $("#toolbar").height());
});
main.mousedown(function (event) {
    if (event.which == 3) {
        showMenu(event);
    } else {
        hideMenu();
    }
});

var open_input = "";

var onTdClick = function () {
    if (!ctrlPressed && !shiftPressed) {
        clearSelected();
        var el = $("td[addr='" + $(this).attr("addr") + "']");
        if (!$(this).attr("not-editable")) {
            open_input = $(this).attr("addr");
            closeAllInputsAndSave();
            var text = $(this).find("span").text();
            var input = $(".td-input[addr='" + $(this).attr('addr') + "']");
            $(this).find("span").hide();
            input.val(text);
            input.show();
            input.focus();
        }
    } else {
        if (ctrlPressed) {
            $(this).attr("before-color", $(this).css("background-color"));
            $(this).css("background-color", "#87F969");
            selected.push($(this).attr("addr"));
        } else {
            $(this).attr("before-color", $(this).css("background-color"));
            var row = $(this).attr("row");
            var column = $(this).attr("column");
            if (selected.length > 0) {
                var from_col = $("td[addr='" + selected[0] + "']").attr("column");
                var from_row = $("td[addr='" + selected[0] + "']").attr("row");
                clearSelected();
                if (row >= from_row) {
                    for (var i = from_row; i <= row; i++) {
                        if (column >= from_col) {
                            for (j = from_col; j <= column; j++) {
                                var sadr = getColumnName(j) + i;
                                var elem = $("td[addr='" + sadr + "']");
                                elem.css("background-color", "#87F969");
                                selected.push(elem.attr("addr"));
                            }
                        }
                    }
                }
            }
        }
    }

};

var onKeyDownInput = function (e) {
    if (e.keyCode == 13) {
        open_input = "";
        closeAllInputsAndSave();
    }
};
new_table.click(function () {
    $("#table").html("");
    var html = "";
    html += '<table class="table"><tr><td not-editable="1">iCell</td>';
    for (var i = 1; i < 27; i++) {
        html += "<td row='1' column='" + i + "' not-editable='1'>" + getColumnName(i) + "</td>";
        max_column = i;
    }
    $("#table").html(html);
    html += "</tr>";
    for (var i = 1; i < 60; i++) {
        html += "<tr row='" + i + "'>";
        var j = 1;
        html += "<td not-editable='1'>" + i + "</td>";
        $("td[row='1']").each(function () {
            var addr = getColumnName(j) + i;
            html += "<td addr='" + addr + "' column='" + j + "' row='" + i + "'><input type='text' addr='" + addr + "' style='display:none' class='td-input'/></td>";
            j++;
        });
        html += "</tr>";
        max_row = i;
    }
    html += "</table>";
    $("#table").html(html);
    setEventListenersToTd();
});

$("#new_row").click(function () {
    var html = "";
    html += "<tr row='" + (max_row + 1) + "'>";
    html += "<td not-editable='1'>" + (max_row + 1) + "</td>";
    for (var i = 0; i < max_column; i++) {
        var addr = getColumnName(i) + (max_row + 1);
        html += "<td addr='" + addr + "' column='" + i + "' row='" + (max_row + 1) + "'><input type='text' addr='" + addr + "' style='display:none' class='td-input'/></td>";
    }
    html += "</tr>";
    $("tr[row='" + max_row + "']").after(html);
    max_row = max_row + 1;
    setEventListenersToTd();
});

$("#new_col").click(function () {
    $("td[column='" + max_column + "']").each(function (index) {
        if (index == 0) {
            html += "<td row='1' column='" + (max_column + 1) + "' not-editable='1'>" + getColumnName(max_column + 1) + "</td>";
            $(this).after(html);
        } else {
            var html = "";
            var addr = getColumnName(max_column + 1) + $(this).attr("row");
            html += "<td addr='" + addr + "' column='" + (max_column + 1) + "' row='" + $(this).attr("row") + "'><input type='text' addr='" + addr + "' style='display:none' class='td-input'/></td>"
            $(this).after(html);
        }
    });
    max_column = max_column + 1;
});