const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

main();

document.getElementById("reset").onclick = function(){main()};

function main(){
	if (typeof window.start_interval !== 'undefined') {
		clearInterval(window.start_interval);
	}

	var incomplete = true;
	var first_click = true;

	document.getElementById("test-area").style.backgroundColor = "white";
	document.getElementById("test-area").value = "";
	document.getElementById("clock").getElementsByTagName("div")[0].innerHTML = "00:00:00";

	document.getElementById("test-area").onkeyup = function(){checkInput();};

	
	function miliSecondsToTime(input_ms){
		var final_ms = (input_ms % 1000).toString();
		input_ms = (input_ms - final_ms) / 1000;
		
		var final_sc = input_ms % 60;
		input_ms = (input_ms - final_sc) / 60;
		
		var final_min = input_ms % 60;
		var final_hrs = (input_ms - final_min) / 60;
		
		if (final_sc < 10) {
			final_sc = "0" + final_sc.toString()
		}
		
		if (final_min < 10) {
			final_min = "0" + final_min.toString()
		}
		
		if (final_hrs < 10) {
			final_hrs = "0" + final_hrs.toString()
		}
		
		time_string = final_hrs + ":" + final_min + ":" + final_sc + ":" + final_ms;
		
		return time_string
	}

	function start_timer() {
		var new1 = new Date();
		var milesecond_difference = new1 - window.start_timestamp;
		
		new_time = miliSecondsToTime(milesecond_difference);
		document.getElementById("clock").getElementsByTagName("div")[0].innerHTML = new_time;
		
	}

	function timer_handler(){
		window.start_timestamp = new Date();
		window.start_interval = window.setInterval(start_timer, 10);
	}
	
	function checkInput() {
		if (first_click){
			timer_handler();
			first_click = false;
		}
		
		var target_text = document.getElementById("origin-text").getElementsByTagName("P")[0].innerHTML;
		var input_text = document.getElementById("test-area").value;
		
		var true_or_false = target_text.startsWith(input_text);

		if (true_or_false){
			document.getElementById("test-area").style.backgroundColor = "yellow";
		}
		else{
			document.getElementById("test-area").style.backgroundColor = "pink";
		}
		
		
		if (target_text == input_text){
			document.getElementById("test-area").style.backgroundColor = "lightgreen";
			console.log("Complete");
			clearInterval(window.start_interval);
			console.log(start_interval);
		}
	}
}





// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:


// Start the timer:


// Reset everything:


// Event listeners for keyboard input and the reset button:
