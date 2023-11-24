const rows = 5;
const columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "images/puzzle/blank.jpg";

            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);
        }
    }


    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); 
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "images/puzzle/" + pieces[i] + ".jpg";

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);  
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd); 

        document.getElementById("pieces").append(tile);
    }
}


function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    document.getElementById("turns").innerText = ++turns;
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const openQuizBtn = document.getElementById("openQuizBtn");
    const closeQuizBtn = document.getElementById("closeQuizBtn");
    const quizContainer = document.getElementById("quizContainer");
  
    // Event listener to open the quiz pop-up
    openQuizBtn.addEventListener("click", function() {
      quizContainer.style.display = "block";
      closeQuizBtn.style.display = "block";
    });
  
    // Event listener to close the quiz pop-up
    closeQuizBtn.addEventListener("click", function() {
      quizContainer.style.display = "none";
      closeQuizBtn.style.display = "none";
    });
});
  