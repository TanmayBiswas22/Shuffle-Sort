function shuffleCells() {
   let cellContainer = document.getElementById("cell-container");
   let elementsArray = [...cellContainer.getElementsByClassName('cell')];

   //remove all the old cells
    elementsArray.forEach(function(element){
    cellContainer.removeChild(element);
  })

  shuffleArray(elementsArray);
  //append the new shuffled cells
  elementsArray.forEach(function(element){
  cellContainer.appendChild(element);
})

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function sortCells() {

   let cellContainer = document.getElementById("cell-container");
   let elementsArray = [...cellContainer.getElementsByClassName('cell')];

   //remove all the old cells
    elementsArray.forEach(function(element){
    cellContainer.removeChild(element);
  })
  sortArray(elementsArray);
  //append the new sorted cells
  elementsArray.forEach(function(element){
  cellContainer.appendChild(element);
});

}

function sortArray(array) {
  array.sort(function(a, b){return parseInt(a.textContent) - parseInt(b.textContent)});
  return array;
}