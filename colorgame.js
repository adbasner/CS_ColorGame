// initial variables, set to hard mode to start
let numberOfSquares = 6;
let colors = [];
let pickedColor;

// selectors
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function() {
  reset();
});


// functions
function init() {
  setUpModeBtns();
  setUpSquares();
  reset();
}

function setUpModeBtns() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to each square
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
        //chage text of reset button
        resetButton.textContent = "Play Again?";
      } else {
        //blacks out box
        this.style.backgroundColor = "#242424";
        //changed menu to try again
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numberOfSquares);
  //pick new random color
  pickedColor = pickColor();
  //change color diplay to match picked color
  colorDisplay.textContent = pickedColor;
  // resets button text if won
  resetButton.textContent = "New Colors";
  // resets text span
  messageDisplay.textContent = "Pick the correct color!";
  //change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //resets title background
  h1.style.backgroundColor = "steelblue";
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
