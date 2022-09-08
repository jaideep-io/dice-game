var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var winner;
function printWinner(randomNumber1,randomNumber2)
{
if(randomNumber1>randomNumber2)
{
    winner=" Player1 Won ";
}
else if(randomNumber1<randomNumber2)
{
    winner=" Player2 Won ";
}
else
{
    winner=" It's a Draw ";
}
return winner;
}
document. querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document. querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
document.querySelector("h1").textContent=printWinner(randomNumber1,randomNumber2);

