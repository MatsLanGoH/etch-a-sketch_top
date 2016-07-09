height = 16;
width = 16;

$(document).ready(function() {
    buildTable(height, width);
});

function buildTable(height, width) {
    $('#tilebox').empty();
    $('#tilebox').append('<table id="sketch_grid">');
    for (var i = height - 1; i >= 0; i--) {
        $('#sketch_grid').append('<tr id="row' + (height - i) + '">');
        for (var j = width - 1; j >= 0; j--) {
            $('#row' + (height - i)).append('<td><div class="tile"></div></td>');
        }
        $('#sketch_grid').append('</tr>');
    }

    enableDrawing();
}


function resetTable() {

    height = prompt("Please enter new height: ", height);
    while (isNaN(height) || (height < 4)) {
        height = prompt ("Please enter a valid number.");
    }
    width = prompt("Please enter new width: ", width);
    while (isNaN(width)) {
        widdth = prompt ("Please enter a valid number.");
    }

    buildTable(height, width);
}

function enableDrawing() {
    $('.tile').hover(function() {
        $(this).css('background-color', '#000000');
    });
}