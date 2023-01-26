var player1=prompt("enter player 1 name");

var player2=prompt("enter player 2 name");

document.querySelectorAll("p")[0].innerHTML=player1;

document.querySelectorAll("p")[1].innerHTML=player2;

var randomNumber1=Math.floor(Math.random()*6+1);

document.querySelector(".img1").addEventListener("click",function(){
    // var randomNumber1=Math.floor(Math.random()*6+1);
    var audio =new Audio("dice-1.mp3")
    audio.play()

    var randomDiceImage="dice" + randomNumber1 + ".png";
    
    var randomImageSource="images/"+randomDiceImage;
    
    var image1=document.querySelectorAll("img")[0];
    
    image1.setAttribute("src",randomImageSource)
})

var randomNumber2=Math.floor(Math.random()*6+1)

document.querySelector(".img2").addEventListener("click",function(){
    // var randomNumber2=Math.floor(Math.random()*6+1);

    var audio =new Audio("dice-1.mp3")
    audio.play()
    
    var randomDiceImage2="dice" + randomNumber2 + ".png";
    
    var randomImageSource2="images/"+ randomDiceImage2;
    
    var image2=document.querySelectorAll("img")[1];
    
    image2.setAttribute("src",randomImageSource2);
})

// var randomNumber1=Math.floor(Math.random()*6+1);

// var randomDiceImage="dice" + randomNumber1 + ".png";

// var randomImageSource="images/"+randomDiceImage;

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src",randomImageSource);

// var randomNumber2=Math.floor(Math.random()*6+1);

// var randomDiceImage2="dice" + randomNumber2 + ".png";

// var randomImageSource2="images/"+ randomDiceImage2;

// var image2=document.querySelectorAll("img")[1];

// image2.setAttribute("src",randomImageSource2);

   setTimeout(function(){

if(randomNumber1>randomNumber2)
{
    var audio =new Audio("win-1.mp3")
    audio.play()
    document.querySelector("h1").innerHTML= player1 + "  win !";
}
else if(randomNumber2>randomNumber1)
{
    var audio =new Audio("win-1.mp3")
    audio.play()
    document.querySelector("h1").innerHTML=player2 + " win !";
}
else
{
    document.querySelector("h1").innerHTML="Draw !";
    var audio =new Audio("draw-1.mp3")
    audio.play()
}
},5000) 