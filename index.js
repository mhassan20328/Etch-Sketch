


function makegrid(size) {

    let board=document.querySelector(".board");
    let squares=document.querySelectorAll(".cell");
    squares.forEach(square => square.remove());
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    let amount=size*size;
    console.log(amount);
    for (let i=0; i<amount; i++) {
        let cell=document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor="blue";
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor="red";
        })
        board.appendChild(cell);
    }
}

makegrid(16);
function getsize(input) {
    console.log(input);
    if (input>=2 && input<=100) {
    makegrid(input);
    }
    else {
        alert("Please enter a number between 2 and 100");
    }
    
 
}