let container = document.querySelector('#container');
let titleDiv = document.querySelector('#titleDiv');
//
for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  newDiv.onmouseover = function() {
    newDiv.style.cssText = "background-color: #ffaf9d;";
  }
  //
  container.appendChild(newDiv);
  let theBoxes = document.getElementById("container").children;
  let counterOne;
  //
  document.getElementById("resetButton").onclick = function resetGrid() {
    for (counterOne = 0; counterOne < theBoxes.length; counterOne++) {
      theBoxes[counterOne].style.cssText = "background-color: white;";
    }
  }
}
//
