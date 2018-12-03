//build array of x random colors by calling the generate function
let colors = generateRandomColors(6);
//selects h1 to change when you win
let h1 = document.querySelector("h1");
//selects all squares
let squares = document.querySelectorAll(".square");
//generates a correct answer from the collors array
let pickedColor = pickColor();
//selects span in h1 to display rga value
let colorDisplay = document.getElementById("colorDisplay");
//displays correct or not in menu
let messageDisplay = document.querySelector("#message");
//sets correct rga in heaser
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners
  squares[i].addEventListener("click", function() { 
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // see if you guessed correctly or not
    if (clickedColor === pickedColor) { 
      //updates menu bar
      messageDisplay.textContent = "Correct";
      //runs the function change colors to set all boxes to the correct color
      changeColors(clickedColor);
      //changes header background to match
      h1.style.backgroundColor = clickedColor;
    } else {
      //blacks out box
      this.style.backgroundColor = "#242424";
      //changed menu to try again
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop thorugh all squares and change color to match
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //function to set a correct answer
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  // var num = 
  //return array
  return arr;
}

function randomColor() {
  //pick a red between 0 and 255
  let red = Math.floor(Math.random() * 256);
  //pick a green between 0 and 255
  let green = Math.floor(Math.random() * 256);
  //pick a blue between 0 and 255
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
