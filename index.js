var randomNumber1 = Math.floor(Math.random()*6) + 1;
var abc = "dice" +  randomNumber1 + ".png";
var final = "./images/" + abc;

document.querySelector(".img1").setAttribute("src", final);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var abc = "dice" +  randomNumber2 + ".png";
var final = "./images/" + abc;

document.querySelector(".img2").setAttribute("src", final);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Both Wins!";
}





// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
// var randomNumber2 = Math.floor(Math.random()*6) + 1;
// document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// var diceImg = "dice" + randomNumber1 + ".png";
// var randomDiceImg = "./images/" + diceImg;

// document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);

// var randomNumber2 = Math.floor(Math.random()*6) + 1;
// var diceImg1 = "dice" + randomNumber2 + ".png";
// var randomDiceImg1 = "./images/" + diceImg1;

// document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg1);

// if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩Player 1 wins";
// }
// else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "Player 2 wins🚩";
// }
// else{
//     document.querySelector("h1").innerHTML = "Draw!";
// }