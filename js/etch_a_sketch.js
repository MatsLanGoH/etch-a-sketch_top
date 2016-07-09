rows = 16;
cols = 16;

$(document).ready(function() {
    buildTable(rows, cols);
});

function buildTable(rows, cols) {
    $('#tilebox').empty();
    $('#tilebox').append('<table id="sketch_grid">');
    for (var i = rows - 1; i >= 0; i--) {
        $('#sketch_grid').append('<tr id="row' + (rows - i) + '">');
        for (var j = cols - 1; j >= 0; j--) {
            $('#row' + (rows - i)).append('<td><div class="tile"></div></td>');
        }
        $('#sketch_grid').append('</tr>');
    }

    setTileSize();

    enableDrawing();

}


function resetTable() {

    rows = prompt("Please enter new number of rows: ", rows);
    while (isNaN(rows) || (rows < 4)) {
        rows = prompt ("Please enter a valid number.");
    }
    cols = prompt("Please enter new number of cols: ", cols);
    while (isNaN(cols)) {
        cols = prompt ("Please enter a valid number.");
    }


    buildTable(rows, cols);
}

function enableDrawing() {
    $('.tile').hover(function() {
        $(this).css('background-color', '#000000');
    });
}


function setTileSize() {
    console.log(window.innerWidth, window.innerHeight);
    tile_width = Math.floor(window.innerWidth * 0.8 / cols);
    tile_height = Math.floor(window.innerHeight * 0.8 / rows);
    console.log(tile_width, tile_height);
    console.log(tile_width * cols, tile_height * rows);
    if (tile_width * rows > window.innerWidth) {
        $('.tile').height(tile_height).width(tile_height);
    } else {
        $('.tile').height(tile_width).width(tile_width);
    }
}