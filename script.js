
let currCheese;
let currTom;
let score=0;
let gameOver=false;

window.onload = function(){
    setGame();
}
function setGame(){
    for(let i=0;i<9;i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").append(tile)
    }
    setInterval(setCheese,1000);
    setInterval(setTom,1200);
}

function getRandomTile(){
    let num= Math.floor(Math.random()*9);
    return num.toString();
}

function setCheese(){
    if(gameOver){
        return;
    }
    if(currCheese){
        currCheese.innerHTML = "";
    }
    let cheese = document.createElement("img");
    cheese.src="./cheese-f.png";
    let num = getRandomTile();
    if(currTom && currTom.id == num){
        return;
    }
    currCheese = document.getElementById(num);
    currCheese.appendChild(cheese);
}

function setTom(){
    if(gameOver){
        return;
    }
    if(currTom){
        currTom.innerHTML="";
    }
    let tom = document.createElement("img");
    tom.src="./tom-1.png";
    let num = getRandomTile();
    if(currCheese && currCheese.id == num){
        return;
    }
    currTom = document.getElementById(num);
    currTom.appendChild(tom);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currCheese){
        score += 10;
        document.getElementById("score").innerText="No. of cheese blocks: "+score.toString();
    }
    else if(this == currTom){
        // document.getElementById("score").innerText="Highest score:  " + score.toString() + " Game Over!";
        document.getElementById("score").innerText="Tom caught you..Start over!";
        gameOver=true;
    }
}