var randomNumber1 = Math.round(Math.random()*5+1);
var randomNumber2 = Math.round(Math.random()*5+1);
var randomDice_image1 = "images/dice" + randomNumber1 +".png";
var randomDice_image2 = "images/dice" + randomNumber2 +".png";
document.querySelector("img").setAttribute("src",randomDice_image1);
document.querySelectorAll("img")[1].setAttribute("src",randomDice_image2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="DRAW!!!";
}