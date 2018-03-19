var numSquares = 6;
var color =[];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var square = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}
function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
      reset();

    })
  }
};
function setUpSquares(){
  for(var i = 0; i <color.length; i++){
    //add click listenrs to squares
    square[i].addEventListener("click", function(){
      //grab color of clicked squares
      var clickedColor =this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
      }else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    })
  }
}
function reset(){
  color = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    if(color[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = color[i];
    }else{
      square[i].style.display ="none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

for(var i = 0; i <color.length; i++){
  //add click listenrs to squares
  square[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor =this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";

    }
  })
}

function changeColors (color){
  //loop through all squares
  for(var i = 0; i <square.length; i++){
  // change each color to match given colors
  square[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*color.length);
  return color[random];
};
function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;

}
function randomColor(){
  //pick a "red" from 0 -255
var r = Math.floor(Math.random()* 256);
  //pick a "green" from 0 -255
var g = Math.floor(Math.random()* 256);
  //pick a "blue" from 0 -255
var b = Math.floor(Math.random()* 256);
return "rgb("+ r +", "+g+", "+b+ ")"
};
