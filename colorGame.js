
var numberOfBlocks = 6;
var colors = generateRandomColors(numberOfBlocks); //array of random colors

var correctColor = pickedColor(); //stores the correct color that needs to be guessed
var squares = document.querySelectorAll(".square"); //points all the square in the html
var colorCode = document.getElementById("colorCode"); //points rgb color code in H1
var message = document.getElementById("message"); //to change the message inside stripe
var headBackground = document.querySelector("h1"); 
var resetButton = document.getElementById("button"); //reset button
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function()
	{
		message.textContent = "";
		easyBtn.classList.add("selectedBtn");
		hardBtn.classList.remove("selectedBtn");
		numberOfBlocks = 3;
		colors = generateRandomColors(numberOfBlocks);
		correctColor = pickedColor();
		colorCode.textContent = correctColor;

		for(var i=0 ; i < squares.length; i++)
		{
				if (colors[i]) {
					squares[i].style.backgroundColor = colors[i];
				}
				else
					squares[i].style.display = "none";
		}
		headBackground.style.backgroundColor = "steelblue";


	});

hardBtn.addEventListener("click", function()
	{
		message.textContent = "";
		numberOfBlocks = 6;
		hardBtn.classList.add("selectedBtn");
		easyBtn.classList.remove("selectedBtn");
		colors = generateRandomColors(numberOfBlocks);
		correctColor = pickedColor();
		colorCode.textContent = correctColor;
		for(var i=0; i < squares.length; i++)
		{	
			squares[i].style.backgroundColor =colors[i];		
			squares[i].style.display = "block";			
	}
			headBackground.style.backgroundColor = "steelblue";
});


resetButton.addEventListener("click" , function() //reset button
{
	colors = generateRandomColors(numberOfBlocks);
	correctColor = pickedColor();
	for(var i=0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	colorCode.textContent = correctColor;
	headBackground.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
});


colorCode.textContent = correctColor;


for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i]; //assigns each square a color and displays it
	squares[i].addEventListener("click", function() // assigns even listener to each square
		{
			 var selectedColor = this.style.backgroundColor;
			if (selectedColor === correctColor)
			{
				changeColor(selectedColor);
				message.textContent = "Correct!";
				headBackground.style.backgroundColor= correctColor;
				resetButton.textContent = "Play Again?";						
				
			}
			else
			{
				this.style.backgroundColor = "black";
				message.textContent = "Try Again";
			}
		})
}


function changeColor(color) //changing colors of all the squares after the correct color is guessed
{
	for(var i = 0; i < squares.length; i++)
				{
					squares[i].style.backgroundColor = color;
				}
}

function pickedColor() //selecting a random color from the array
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) //generating a random color and pushing it into the array
{
	var arr = [];

	for(var i = 0; i < num ; i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){ // generating random rgb colors
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}