 
$(function() {
// array of question objects
var questions = [
	{"question": "How old is Madonna?",
	  "choices":["around 50", 
	  			 "around 60", 
	  			 "around 35", 
	  			 "it's impossible to know"], 
	  			 "correctAnswer":1
	},
	{"question": "In Michigan it's illegal to tie ____ to a fire hydrant.",
	  "choices":["a dog", 
	  			 "a bicycle", 
	  			 "anything", 
	  			 "an alligator"], 
	  			 "correctAnswer":3
	},
	{"question": "How many windows are in the Empire State Building?",
	  "choices":["6000", 
	  			 "1000", 
	  			 "18000", 
	  			 "it's impossible to know"], 
	  			 "correctAnswer":0
	},
	{"question": "How long does the average American spend waiting at red lights over a lifetime?",
	  "choices":["9 months", 
	  			 "24 days", 
	  			 "6 months", 
	  			 "it's impossible to know"], 
	  			 "correctAnswer":2
	},
	{"question": "On backside of $100 bill, what time is shown on the Independence Hall Clock?",
	  "choices":["4:10", 
	  			 "midnight", 
	  			 "5:00", 
	  			 "there's no clock on the $100 bill"], 
	  			 "correctAnswer":0
	},
	{"question": "What piece of office equipment did Johnann Vaaler invent in 1900?",
	  "choices":["typewriter", 
	  			 "retractible pen", 
	  			 "stenograph", 
	  			 "paperclip"], 
	  			 "correctAnswer":3
	},
	{"question": "What were the first products marketed inside aerosol containers?",
	  "choices":["paints", 
	  			 "cosmetics", 
	  			 "compressed air", 
	  			 "insecticides"], 
	  			 "correctAnswer":3
	},
	{"question": "In the American household, which room is the site of most arguments?",
	  "choices":["garage", 
	  			 "kitchen", 
	  			 "bedroom", 
	  			 "bathroom"], 
	  			 "correctAnswer":1  
	}];
	 	 
	
	//  Variable that will hold setInterval that runs readNext
	var intervalId;
	 
	var count = 0;      // refers to indexes in question array
	var correct = 0;    // correct answers
	var incorrect = 0;  // incorrect answers
	

	function newPlayer(){
		
	  		
		intervalId = setInterval(readNext, 5000); 
 	}

 	function readNext() {
 		 
 		 // check if done with all questions in array
		for(var i=0; i<questions.length; i++) {
			 
			$("#question").html(questions[i].question);
			$("#btn0").html(questions[i].choices[0]);
			$("#btn1").html(questions[i].choices[1]);
			$("#btn2").html(questions[i].choices[2]);
			$("#btn3").html(questions[i].choices[3]);	
			
			// listen for a click on an btn0, then determine if correct
				$(document).on("click", "#btn0", function() {
					 if(questions[i].choices[0] === questions[i].choices[correctAnswer]){
					 	correct++;
					 	alert("correct")}						
					 else { 
					    incorrect++; 
					    alert("incorrect")} 				
				});	
	 	};	


	 function reset() {
	 	count = 0;
	 	 
	 	clearInterval(intervalId);
	  	$("#question").html("");
		$("#btn0").html("");
		$("#btn1").html("");
		$("#btn2").html("");
		$("#btn3").html("");	

	 }	
	 	$(document).on("click", "#btnStart", function() {
         newPlayer();

     });
	  
	 
	 //   // $("#btnStart").click(newPlayer());
		// $(document).on("click", "#btnStart", function() {
  //        newPlayer();
  //    });
	   // $("#btnStart").on("click"), test();

