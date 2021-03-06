$(document).ready(function(){

	$('#startGame').on('click', function(){
    var user = prompt("Please enter your name");
	
	// store the amount of turns //
    var turns = 4;
    // field length
    var field = 80;
    var yardsToFirst = 10;
    // first down?
    //var firstDown = 10;

    // if run is selected //
    var run = function(){
	  // Stores 3 random variables into and array and picks one randomly. This is to reduce the possibilty of a big play //
	  var one = Math.floor((Math.random() * 100) + 1);
      var two = Math.floor((Math.random() * 15) + 1);
      var three = Math.floor((Math.random() * 10) + 1);
	  var four = Math.floor((Math.random() * 10) + 1);
      var myArray = [];
	  	// push the variables into an array //
      myArray.push(one);
      myArray.push(two);
      myArray.push(three);
	  myArray.push(four);
	  	// select one of the random numbers to be the play //
      var play = myArray[Math.floor((Math.random() * myArray.length))];
	  	
		field -= play;
	  	yardsToFirst -= play;
		turns -= 1; 
	  // test play to determine the outcome //
	  if(play >= 100){
	  	alert("BIG PLAY! " + user + " YOU WIN!");
	  }
	  else if(field <= 0){
		alert(user + " SCORED! " + user + " WINS THE SUPERBOWL! Game Over!");
	  }
	  else if(play > 0){
		  alert(user + " ran the ball " + play + " yards.");
		  //field -= play;  // minus the play yards from total field yards //
		  //yardsToFirst -= play;
		  //turns -= 1;  // minus one turn from the amount of turns //
		  //check if first down //
		  if(play >= 10 || yardsToFirst <= 0) {
			  alert("First Down! You get 4 more plays!");
			  alert("You have " + field + " yards to go");
			  turns = 4;
			  yardsToFirst = 10;
			  newPlay();
		}

		else{
			alert("You have " + field + " yards to go to win.");
			if(turns === 0){
				alert(user + " is out of downs. Game Over!");
			}
			else {
				alert("You have " + turns + " downs left to score or get a first down.");
				newPlay();
			}
		}
	  }
	  else {
	  	  alert(user + " FUMBLED! GAME OVER!");
	  }
    };

// if pass is selected //
    var pass = function(){
        // Stores 3 random variables into and array and picks one randomly. This is to reduce the possibilty of a big play //
	  var one = Math.floor((Math.random() * 100) + 1);
      var two = Math.floor((Math.random() * 15) + 1);
      var three = Math.floor((Math.random() * 10) + 1);
	  var four = Math.floor((Math.random() * 10) + 1);	
      var myArray = [];
	  	// push the variables into an array //
      myArray.push(one);
      myArray.push(two);
      myArray.push(three);
	  myArray.push(four);
	  	// select one of the random numbers to be the play //
      var play = myArray[Math.floor((Math.random() * myArray.length))];
	  	
		field -= play;
	  	yardsToFirst -= play;
		turns -= 1; 
	  // test play to determine the outcome //
	  if(play >= 100){
	  	alert("BIG PLAY!" + user + " WINS THE SUPERBOWL!");
	  }
	  else if(field <= 0){
		alert("YOU SCORED! YOU WIN THE SUPERBOWL");
	  }
	  else if(play > 0){
		  alert(user + " passed the ball for " + play + " yards.");
		  //field -= play;  // minus the play yards from total field yards //
		  //yardsToFirst -= play;
		  //turns -= 1;  // minus one turn from the amount of turns //
		  //check if first down //
		  if(play >= 10 || yardsToFirst <= 0) {
			  alert("First Down! You get 4 more plays!");
			  alert("You have " + field + " yards to go");
			  turns = 4;
			  yardsToFirst = 10;
			  newPlay();
		}

		else{
			alert("You have " + field + " yards to go to win.");
			if(turns === 0){
				alert("You are out of downs. Game Over!");
			}
			else {
				alert("You have " + turns + " down left to score or get a first down.");
				newPlay();
			}
		}
	  }
	  else {
	  	  alert(user + " was Intercepted! GAME OVER!");
	  }
    };


    // run a new play //
    var newPlay = function() {
    	var choice = prompt("Run or Pass?").toLowerCase();  // prompt user to select a run or pass play //
    	// test for turnover before running play //
    	var turnover = Math.floor((Math.random() * 20) + 1);
    
    	if (turnover >= 19) {
    		alert("There was a turnover. Game Over.");
    	}
    	else {
    	  if(choice === "run"){
    		  run();  // call the run function //
    	}
    	  else {
    		  pass();  // call the pass function //
    	  }
      } // end of turnover test//
    };

    //starting the game //
    var start = function(){
		if(user === ""){
			user = prompt("Enter your name");
			start();
		}
		
	    var newGame = prompt("Welcome to Superbowl overtime! You have one drive to win the game, " + user + ". Are you ready?").toLowerCase();  // ask if the user is ready to play //
    	if(newGame === "yes") {
    	  var choice = prompt("You have the ball on the 20 yard line. Pick a play " + user + ". Run it or Pass it?").toLowerCase();  // if yes, select a run or pass play //
          switch(choice) {
    		    case "run":
    		      alert(user + " chose to run.");
    	        run();  // call the run function //
    		    break;
    
    	      case "pass":
    	        alert(user + " chose to pass.");
    	        pass();  // call the pass function //
    	        break;
    
            default:
              alert("I don't get it.");
    		  break;
    	  }
    	}
    	else {
    		alert("You don't want to play? You're a loser " + user + "!");  // default if run or pass is not the option entered //
    	}
    };
start();
  });
});