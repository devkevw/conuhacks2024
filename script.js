// 16 x 16 grid of divs
const container = document.querySelector(".container");
const size = 16;

// outer loop for columns
for (var i = 0; i < size; i++){
    var row = document.createElement("div");
    row.classList.add("row")
    row.style.display = "flex";

    // inner loop for row 
    for (var j = 0; j < size; j++){
        var square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }  
    
    container.appendChild(row);
}

// for hover trail
function changeSquareColor() {
    this.classList.add('hovered');
}

var squares = document.querySelectorAll(".square");

squares.forEach(function(square) {
    square.addEventListener('mouseover', changeSquareColor);
});

// clear drawing board
const clearButton = document.querySelector('.buttons .clear');

function clear() {
    // remove 'hovered' class from squares
    squares.forEach(function(square){
        square.classList.remove('hovered');
    });
}

clearButton.addEventListener('click', clear);

