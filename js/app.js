
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var randomNumber;
var difference;
var clickCount = 0;

  // Generate random number when page loads 	
	window.onload = function newGame(){
 		randomNumberCalculation(); 
   };	
// Prevent the enter key from being used 
    //  $("#userGuess").keypress(function(e){
  		// 		if (e.which == 13 ) {
  		// 			e.preventDefault();
  		// 		};

 		 // })
	// Generate random number when new game is pressed
 		 $(".new").click(function(){
  			reset();
  			randomNumberCalculation();
  	// $("#feedback").replaceWith("<h2>Make your Guess!</h2>");
  		
  		});

  		// User inputs guess and difference between random number and guess is calculated.

  	$('form').submit(function(){
  		input = document.getElementById("userGuess").value;
  		$('#userGuess').val('');

  		inputNum = parseInt(input, 10);
   		if (inputNum > 100 || input == "") {
  			alert("please type a number between 0 and 100")
   		}
  		else{
		difference = Math.abs(randomNumber-inputNum);

		// Add guess to list and click count;
  		$("#guessList").append("<li>" + input + "</li>");
    	clickCount += 1;
		$("#count").replaceWith("<span id='count'>" + clickCount + "</span>");

 			// If guess is greater than 50 from random number then alert ice cold.
			if (difference > 50) {
				$("#feedback").replaceWith("<h2 id='feedback'>Ice-Cold</h2>");
			}
		 	// If between 30-50 alert cold
			else if (difference > 30) {
				$("#feedback").replaceWith("<h2 id='feedback'>Cold</h2>");
			}
			// If between 20 and 30, warm
			else if (difference > 20) {
				$("#feedback").replaceWith("<h2 id='feedback'>Warm</h2>");
			}
			// if between 10 and 20, hot
			else if (difference > 10) {
				$("#feedback").replaceWith("<h2 id='feedback'>Hot</h2>");
			}
			else if (difference > 0) {
				$("#feedback").replaceWith("<h2 id='feedback'>Very Hot</h2>");
			}
			// If between 1 and 10 very hot
			else {
				$("#feedback").replaceWith("<h2 id='feedback'>Correct</h2>");
			}
		}

		return false;
  	});

// Reset the screen when new game is clicked.

var reset = function(){
	clickCount=0;
  	$("#count").replaceWith("<span id='count'>" + clickCount + "</span>");
  	$("#feedback").replaceWith("<h2 id='feedback'>Make your Guess!</h2>");
  	$("#userGuess").replaceWith("<input type='text' name='userGuess' id='userGuess' class='text' maxlength='3' autocomplete='off' placeholder='Enter your Guess' required/>")
	$("#guessList").replaceWith("<ul id='guessList' class='guessBox clearfix'>");
	}

// Calculate a random number 

var randomNumberCalculation = function(){
	randomNumber= Math.floor(Math.random() * 101);
}


});
