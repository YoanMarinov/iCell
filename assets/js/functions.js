function getColumnName(columnNumber) {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var dividend = columnNumber;
    var columnName = "";
    var modulo;

    while (dividend > 0) {
        modulo = (dividend - 1) % 26;
        columnName = letters[modulo] + columnName;
        dividend = Math.round((dividend - modulo) / 26);
    }

    return columnName;
}

function closeAllInputsAndSave() {
    $(".td-input").each(function () {
        if (open_input != $(this).attr("addr")) {
            var val = $(this).val();
            $(this).hide();
            $(this).parent().append("<span>"+val+"</span>");
            $(this).val("");
        }
    });
}

function setEventListenersToTd(){
    $("td").each(function () {
        $(this).on('click', onTdClick);
        $(this).on('keydown', onKeyDownInput);
    });
}