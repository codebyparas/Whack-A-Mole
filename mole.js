let currMoleTile;
let currPlantTile;

window.onload = function(){
    setGame();
}

function setGame(){
    // Set up the Grid for the Game Board in HTML
    for(let i=0;i<9;i++){
        let title=document.createElement("div");
        title.id=i.toString();
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 1000);  // 1000 milliseconds = 1 seconds
    setInterval(setPlant, 2000);  // 2000 milliseconds = 2 seconds
}

function getRandomTile(){
    // math.random --> (0-1) * 9 --> (0-9) --> round down to (0-8) integer
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(currMoleTile){
        currMoleTile.innerHTML="";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }

    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";

    let num=getRandomTile();
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}