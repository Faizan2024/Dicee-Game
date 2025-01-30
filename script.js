let player1point = 0;
let player2point = 0;
let congrats = document.querySelector(".new");
let newbtn = document.querySelector("#newbtn");
let submain = document.querySelector(".submain")


play();
newbtn.addEventListener("click", function() {
    congrats.classList.add("hide");
    submain.classList.remove("hide");
    player1point = 0;
    player2point = 0;
    rollCount = 0;
    updateUI();
    // play();
});


function updateUI() {
    document.querySelector(".player1").innerText = "Player 1: " + player1point;
    document.querySelector(".player2").innerText = "Player 2: " + player2point;
    document.querySelector("#clickCount").innerText = "Click Counts: " + rollCount;
}

let rollCount = 0;

function play() {
    let clickbtn = document.querySelector("#click");
    clickbtn.addEventListener("click", function() {
    if (rollCount < 10) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice1imgValue = "images/dice" + dice1 + ".png";
    let dice2imgValue = "images/dice" + dice2 + ".png";

    let diceimg1 = document.querySelectorAll("img")[0];
    let diceimg2 = document.querySelectorAll("img")[1];

    diceimg1.setAttribute("src",dice1imgValue);    
    diceimg2.setAttribute("src",dice2imgValue); 
    
    if(dice1 > dice2) {
        player1point++;
    } else if(dice1 < dice2) {
        player2point++;
    }
    rollCount++;

    updateUI();


    if(rollCount === 10) {
        showWinner();
    }
}

});
}



function showWinner() {
    if(player1point > player2point) {
        document.querySelector("h2").innerText = "Congratulations! Player 1 Won.";
        document.querySelector("#final-point1").innerText = "Player 1: " + player1point;
        document.querySelector("#final-point2").innerText = "Player 2: " + player2point;
        congrats.classList.remove("hide");
        submain.classList.add("hide");
    } else if(player1point < player2point) {
        document.querySelector("h2").innerText = "Congratulations! Player 2 Won.";
        document.querySelector("#final-point1").innerText = "Player 1: " + player1point;
        document.querySelector("#final-point2").innerText = "Player 2: " + player2point;
        congrats.classList.remove("hide");
        submain.classList.add("hide");
    } else {
        document.querySelector("h2").innerText = "Game Draws!";
        document.querySelector("#final-point1").innerText = "Player 1: " + player1point;
        document.querySelector("#final-point2").innerText = "Player 2: " + player2point;
        congrats.classList.remove("hide");
        submain.classList.add("hide");        
    }
}


