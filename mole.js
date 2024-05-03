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
}