numOfSquares = 16;
sketch_color = '#000000';
background_color = '#cccccc'
random_colors = false;
gradient_colors = false;

$(document).ready(function() {
    buildTable(numOfSquares);
    enableDrawing();
});

function buildTable(numOfSquares) {
    $('#tilebox').empty();
    $('#tilebox').append('<table id="sketch_grid">');
    for (var i = numOfSquares - 1; i >= 0; i--) {
        $('#sketch_grid').append('<tr id="row' + (numOfSquares - i) + '">');
        for (var j = numOfSquares - 1; j >= 0; j--) {
            $('#row' + (numOfSquares - i)).append('<td><div class="tile"></div></td>');
        }
        $('#sketch_grid').append('</tr>');
    }
    // The table that contains the squares is given a background-color
    // that is slowly revealed by reducing the opacity of the squares.
    $('#sketch_grid').css('background-color', '#000000');

    setTileSize();


}


function resetTable() {
    // Switch off other hover effects.
    $('.tile').off('mouseenter mouseleave');

    // $('.tile').css({
    //     'background-color': background_color,
    //     'opacity': '1.0'
    // });

    buildTable(numOfSquares);
    enableDrawing();

}


function resizeTable() {
    input = prompt("Please enter new number of squares in a line: ", numOfSquares);

    console.log(input);

    while (!isNaN(input) && ((input < 4) || (input > 96))) {
        input = prompt ("Please enter a number between 4 and 96.");
    }
    if (!isNaN(input)) {
        numOfSquares = input;
    }

    buildTable(numOfSquares);
    enableDrawing();
}


function enableDrawing() {
    if(random_colors) {
        enableColorDrawing();
    } else if (gradient_colors) {
        enableGradient();
    }

    $('.tile').hover(function() {
        $(this).css('background-color', sketch_color);
    });
}

function setColorToBlack() {
    resetColorState();
    sketch_color = '#000000';
    resetTable();
}

function enableGradient() {
    sketch_color = background_color;
    // $('.tile').css('opacity', '1.0');

    $('.tile').hover(function(event) {
        $(event.target).css({
            opacity: ($(this).css('opacity') - 0.1)
        });
    });

}


function setColorToGradient() {
    resetColorState();
    random_colors = false;
    gradient_colors = true;
    resetTable();
}


function randomizeColors() {
    resetColorState();
    random_colors = true;
    resetTable();
}


function enableColorDrawing() {
    sketch_color = rainbow();
    $('.tile').hover(function() {
        /* Stuff to do when the mouse enters the element */
        // console.log(sketch_color);
    }, function() {
        sketch_color = rainbow();
        /* Stuff to do when the mouse leaves the element */
    });
}


function resetColorState() {
    gradient_colors = false;
    random_colors = false;
}

function setTileSize() {
    // console.log(window.innerWidth, window.innerHeight);
    tile_width = (800 / numOfSquares);
    // tile_height = Math.floor(window.innerHeight * 0.3 / numOfSquares);

    // console.log(tile_width, tile_height);
    // console.log(tile_width * cols, tile_height * rows);

    // if (tile_width * numOfSquares > window.innerWidth) {
    //     $('.tile').height(tile_height).width(tile_height);
    // } else {
        $('.tile').height(tile_width).width(tile_width);
    // }
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