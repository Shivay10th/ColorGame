
var level = 9;
var points = 0;
var scoreMode = 45;
var lossOfScore = 5;
var end = false
var square = document.querySelectorAll(".square");
var span = document.querySelector("span");
var whtnext = document.querySelector("#whtNext");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var score = document.querySelector("#Score");
var colors = randomColors(level);
var correctColor = pickColor();
span.textContent = correctColor
start();
function start()
{
for(var i =0; i < square.length; i++)
{
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function(){
    var choosenColor = this.style.backgroundColor;
    if(choosenColor === correctColor){
        if (!end)
            points += scoreMode;
        end = true
        score.textContent = "Score :"+points.toString();
        resetButton.textContent = "Once More";
        whtnext.textContent="Correct!!!";
        correct(this.style.backgroundColor);
        h1.style.backgroundColor = correctColor;
    }else{
        points -= lossOfScore;
        resetButton.textContent = "New Game!";
        this.style.backgroundColor="#232323";
        whtnext.textContent="Try Again!";
    }
});
}
}

for(var i=0; i<mode.length;i++)
{
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("select")
        mode[1].classList.remove("select")
        mode[2].classList.remove("select")
        this.classList.add("select")
        if(this.textContent === "Easy"){
            scoreMode = 50;
            lossOfScore = 10;
            level = 3;
        }
        else if(this.textContent === "Medium"){
            scoreMode = 60;
            lossOfScore = 10;
            level = 6;
        }
        else{
            scoreMode = 45;
            lossOfScore = 5;
            level = 9;
        }
        reset(false)
    })
}
function reset(value){
    end = false;
    if(value == false)
    {
        points = 0;
        score.textContent = "Score : 0";
    }
    whtnext.textContent="";
    colors = randomColors(level);
    correctColor = pickColor();
    span.textContent = correctColor;
    for(var i = 0;i<square.length;i++)
    {
         if(colors[i]){
            square[i].style.display="block";
            square[i].style.backgroundColor=colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor ="steelblue";
}
resetButton.addEventListener("click", function()
{
    this.textContent = "New Colors!"
    reset(true);
});
function correct(colors){
    for(var i = 0;i < square.length;i++){
        square[i].style.backgroundColor=colors;
    }
}
function pickColor(){
    var ran = Math.floor(Math.random()*colors.length);
    return colors[ran];
}
function randomColors(len){
    c = [];
    for(var i =0;i<len;i++)
    {
        c.push(randomColor());
    }
    return c
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}
