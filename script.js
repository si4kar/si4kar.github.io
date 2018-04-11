
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function () {
   hardButton.classList.remove("selected");
   easyButton.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

});

hardButton.addEventListener("click", function () {
   easyButton.classList.remove("selected");
   hardButton.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i<squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }

});

resetButton.addEventListener("click", function () {
    h1.style.background = "steelblue";
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(var i=0; i <squares.length; i++) {
        squares[i].style.background = colors[i];
    }

});

colorDisplay.textContent = pickedColor;

for (var i=0; i <squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!!";
            resetButton.textContent = "Play again?";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColor(color) {
    for (var i=0; i <squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i=0; i<num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}