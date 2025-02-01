let player1point = 0;
let player2point = 0;
let congrats = document.querySelector(".new");
let newbtn = document.querySelector("#newbtn");
let submain = document.querySelector(".submain");

submain.classList.add("hide");

let player1Name = "";
let player2Name = "";

let playerInputs = document.querySelector(".playerInputs");
let playerFirst = document.querySelector("#first-player");
let playerSecond = document.querySelector("#second-player");
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
    player1Name = playerFirst.value;
    player2Name = playerSecond.value;
    if (player1Name && player2Name) {
        playerInputs.classList.add("hide");
        submain.classList.remove("hide");
        updateUI();
    }
});

newbtn.addEventListener("click", function() {
    congrats.classList.add("hide");
    submain.classList.add("hide");
    playerInputs.classList.remove("hide");
    player1point = 0;
    player2point = 0;
    rollCount = 0;
    playerFirst.value = "";
    playerSecond.value = "";
    updateUI();
});

function updateUI() {
    document.querySelector(".player1").innerText = player1Name + ": " + player1point;
    document.querySelector(".player2").innerText = player2Name + ": " + player2point;
    document.querySelector("#clickCount").innerText = "Click Count: " + rollCount;
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

            diceimg1.setAttribute("src", dice1imgValue);
            diceimg2.setAttribute("src", dice2imgValue);

            if (dice1 > dice2) {
                player1point++;
            } else if (dice1 < dice2) {
                player2point++;
            }
            rollCount++;

            updateUI();

            if (rollCount === 10) {
                showWinner();
            }
        }
    });
}

function showWinner() {
    if (player1point > player2point) {
        document.querySelector("h2").innerText = "Congratulations! " + player1Name + " Won.";
        document.querySelector("#final-point1").innerText = player1Name + ": " + player1point;
        document.querySelector("#final-point2").innerText = player2Name + ": " + player2point;
    } else if (player1point < player2point) {
        document.querySelector("h2").innerText = "Congratulations! " + player2Name + " Won.";
        document.querySelector("#final-point1").innerText = player1Name + ": " + player1point;
        document.querySelector("#final-point2").innerText = player2Name + ": " + player2point;
    } else {
        document.querySelector("h2").innerText = "Game Draws!";
        document.querySelector("#final-point1").innerText = player1Name + ": " + player1point;
        document.querySelector("#final-point2").innerText = player2Name + ": " + player2point;
    }
    congrats.classList.remove("hide");
    submain.classList.add("hide");
    playerInputs.classList.add("hide");
}

play();
