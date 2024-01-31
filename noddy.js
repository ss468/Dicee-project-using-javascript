document.getElementById("play").addEventListener("click",()=>{
    var randomNumber1=Math.random()*6+1;
    randomNumber1=Math.floor(randomNumber1);

var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.random()*6+1;
    randomNumber2=Math.floor(randomNumber2);

var randomDiceImage1="dice"+randomNumber2+".png";
var randomImageSource1="images/"+randomDiceImage1;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource1);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
    document.querySelector("body").style.backgroundColor="green";

}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 won";
    document.querySelector("body").style.backgroundColor="brown";


}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Match Draws";
    document.querySelector("body").style.backgroundColor="teal";
}


});


