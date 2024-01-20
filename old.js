let rows = document.querySelectorAll('.row')
function addSquares(num){
  rows.forEach(function(row){
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
  });
}