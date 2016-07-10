rows = 16;
cols = 16;
sketch_color = '#000000';

$(document).ready(function() {
    buildTable(rows, cols);
    enableDrawing();
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


}


function resetTable() {
    // Switch off other hover effects.
    $('.tile').off('mouseenter mouseleave');

    $('.tile').css({
        'background-color': '#cccccc',
        'opacity': '1.0'
    });

    enableDrawing();

}


function resizeTable() {
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
        $(this).css('background-color', sketch_color);
    });
}

function setColorToBlack() {
    resetTable();

    sketch_color = '#000000';
}


function setColorToGradient() {
    resetTable();
    sketch_color = '#cccccc';

    // The table that contains the squares is given a background-color
    // that is slowly revealed by reducing the opacity of the squares.
    $('#sketch_grid').css('background-color', '#000000');
    // $('.tile').css('opacity', '1.0');

    $('.tile').hover(function(event) {
        $(event.target).css({
            opacity: ($(this).css('opacity') - 0.1)
        });
    }, function() {
        /* Stuff to do when the mouse leaves the element */
    });

}


function randomizeColors() {
    resetTable();

    enableColorDrawing();
}

function enableColorDrawing() {
    sketch_color = rainbow();
    $('.tile').hover(function() {
        /* Stuff to do when the mouse enters the element */
        console.log(sketch_color);
    }, function() {
        sketch_color = rainbow();
        /* Stuff to do when the mouse leaves the element */
    });
}


function setTileSize() {
    // console.log(window.innerWidth, window.innerHeight);
    tile_width = Math.floor(window.innerWidth * 0.8 / cols);
    tile_height = Math.floor(window.innerHeight * 0.3 / rows);

    // console.log(tile_width, tile_height);
    // console.log(tile_width * cols, tile_height * rows);

    if (tile_width * rows > window.innerWidth) {
        $('.tile').height(tile_height).width(tile_height);
    } else {
        $('.tile').height(tile_width).width(tile_width);
    }
}


function rainbow() {
    // Solution from http://stackoverflow.com/a/14187677/5087595
    var numOfHues = 30;
    var numOfSteps = 12;
    var hue = Math.floor(Math.random() * numOfHues) * numOfSteps;

    return $.Color({
        hue: hue,
        saturation: 0.9,
        lightness: 0.6,
        alpha: 1
    }).toHexString();
};