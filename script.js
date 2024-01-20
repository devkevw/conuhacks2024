// n x n grid of divs; default 16
const container = document.querySelector(".container");
let size = 16;


// build grid
function buildGrid() {
// outer loop for columns
    for (let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList.add("row")
        row.style.display = "flex";

        // inner loop for rows
        for (let j = 0; j < size; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }  
        
        container.appendChild(row);
    }
}
buildGrid();


// hover trail
function changeSquareColor() {
    this.classList.add('hovered');
}

let squares = document.querySelectorAll(".square");

function addMouseover () {
    squares.forEach(function(square) {
        square.addEventListener('mouseover', changeSquareColor);
    });
}
addMouseover();


// clear drawing board
const clearButton = document.querySelector('.buttons .clear');

function clear() {
    // remove 'hovered' class from squares
    squares.forEach(function(square){
        square.classList.remove('hovered');
    });
}

clearButton.addEventListener('click', clear);


// slider
let slider = document.querySelector(".slider")
let sliderText = document.querySelector(".slider-text")

slider.addEventListener("input", function() {
    sliderText.textContent = `${this.value} x ${this.value}`;
    
    // update squares
    removeSquares();
    size = this.value;
    buildGrid();
    squares = document.querySelectorAll(".square");
    addMouseover();
  });

function removeSquares() {
    let rows = document.querySelectorAll(".row");

    squares.forEach(function(square){
        square.remove();
    })
    rows.forEach(function(row){
        row.remove();
    })
  }


  