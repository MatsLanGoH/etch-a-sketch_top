var numOfSquares = 16;
var sketch_color = '#444444';
var background_color = '#cccccc'
var random_colors = false;
var gradient_colors = false;

$(document).ready(function() {
    buildTable();
});

function buildTable() {
    /* Creates a new sketchpad in the DOM
     * Size is calculated from global variable numOfSquares
     */

    // Turn off existing hover effects
    $('.tile').off('mouseenter mouseleave');

    // Clear DOM and attach table with sketchpad elements
    $('.tilebox').empty();
    $('.tilebox').append('<table id="sketch_grid">');

    // Nested loop to build a table of square elements.
    for (var i = numOfSquares - 1; i >= 0; i--) {
        $('#sketch_grid').append('<tr id="row' + (numOfSquares - i) + '">');
        for (var j = numOfSquares - 1; j >= 0; j--) {
            $('#row' + (numOfSquares - i)).append('<td><div class="tile"></div></td>');
        }
        $('#sketch_grid').append('</tr>');
    }

    // Add background color in table 
    // (this color is gradually revealed when using gradient drawing)
    $('#sketch_grid').css('background-color', '#000000');

    setTileSize();
    enableDrawing();

}

function resizeTable() {
    /* Prompts user for new table size and redraws the sketchpad accordingly. 
     * Invalid input redraws the sketchpad at the current settings. */

    var curNumOfSquares = numOfSquares;
    
    input = prompt("Please enter a number between 4 and 96.", numOfSquares);

    if ((input >= 4) && (input <= 96)) {
        numOfSquares = input;
    } else {
        numOfSquares = curNumOfSquares;
    }

    buildTable();

}


function setTileSize() {
    /* Adjust square width according to number of squares */
    tile_width = Math.floor(800 / numOfSquares);
    $('.tile').height(tile_width).width(tile_width);
    $('.content').css('width', numOfSquares * tile_width);

}



function enableDrawing() {
    /* Enables drawing on sketchpad */
    if (random_colors) {
        enableColorDrawing();
    } else if (gradient_colors) {
        enableGradient();
    }

    $('.tile').hover(function() {
        $(this).css('background-color', sketch_color);
    });
}


function resetColorState() {
    /* Resets color state for drawing function */
    gradient_colors = false;
    random_colors = false;
}


function setColorToBlack() {
    /* Sets Color state to black and redraws table */
    resetColorState();
    sketch_color = '#444444';
    buildTable();
}


function enableGradient() {
    /* Enables gradient coloring */
    sketch_color = background_color;

    $('.tile').hover(function(event) {
        $(event.target).css({
            opacity: ($(this).css('opacity') - 0.1)
        });
    });

}

function setColorToGradient() {
    /* Sets Color state to gradient and redraws table */
    resetColorState();
    random_colors = false;
    gradient_colors = true;
    buildTable();
}



function rainbow() {
    /* Returns random color value */
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


function enableColorDrawing() {
    /* Enables random coloring */
    sketch_color = rainbow();
    $('.tile').hover(function() {
        sketch_color = rainbow();
    });
}


function randomizeColors() {
    /* Sets Color state to random and redraws table */
    resetColorState();
    random_colors = true;
    buildTable();
}
