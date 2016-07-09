$(document).ready(function() {
    buildTable(16, 16)
});

function buildTable(width, height) {
    $('#tilebox').append('<table id="sketch_grid">');
    for (var i = height - 1; i >= 0; i--) {
        $('#sketch_grid').append('<tr id="row' + (height - i) + '">');
        for (var j = width - 1; j >= 0; j--) {
            $('#row' + (height - i)).append('<td><div class="tile"></div></td>');
        }
        $('#sketch_grid').append('</tr>');
    }
}