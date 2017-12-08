 
$(function() {
// array of question objects
var questions = [
	{"question": "How old is Madonna?",
		"correctAnswer": "Around 60",
		"choice1": "around 50 ",
		"choice2": "around 60",
		"choice3": "around 35 ",
		"choice4": "it's impossible to know "
	},
	{"question": "In Michigan it's illegal to tie ____ to a fire hydrant.",
		"correctAnswer": "an alligator",
		"choice1": "a dog ",
		"choice2": "a bicycle",
		"choice3": "anything ",
		"choice4": "an alligator"
	},
	{"question": "How many windows are in the 102 story Empire State Building?",
		"correctAnswer": "6000",
		"choice1": "1000 ",
		"choice2": "6000",
		"choice3": "18000 ",
		"choice4": "it's impossible to know  "
	},
	{"question": "How long does the average American spend waiting at red lights over a lifetime?",
		"correctAnswer": "6000",
		"choice1": "1000 ",
		"choice2": "6000",
		"choice3": "18000 ",
		"choice4": "it's impossible to know  "
	},
	{"question": "On backside of $100 bill, what time is shown on the Independence Hall Clock?",
		"correctAnswer": "4:10",
		"choice1": "4:10" ,
		"choice2": "midnight",
		"choice3": "5:00",
		"choice4": "there's no clock on the $100 bill"
	},
	{"question": "What piece of office equipment did Johnann Vaaler invent in 1900?",
		"correctAnswer": "paperclip",
		"choice1": "typewriter" ,
		"choice2": "retractible pen",
		"choice3": "stenograph",
		"choice4": "paperclip"
	},
	{"question": "What were the first products marketed inside aerosol containers?",
		"correctAnswer": "insecticides",
		"choice1": "paints" ,
		"choice2": "cosmetics",
		"choice3": "compressed air",
		"choice4": "insecticides"
	},
	{"question": "In the American household, which room is the site of most arguments?",
		"correctAnswer": "kitchen",
		"choice1": "garage" ,
		"choice2": "kitchen",
		"choice3": "bedroom",
		"choice4": "bathroom"
	}];
	//  Variable that will hold setInterval that runs readNext
	var intervalId;
	 
	var count = 0;  // refers to indexes in question array

	

	function newPlayer(){
	  
		intervalId = setInterval(readNext, 2000); 
 	}

 	function readNext() {
 		 // check if done with all questions in array
		if (count < questions.length) {
			$("#question").html(questions[count].question);
			$("#btn0").html(questions[count].choice1);
			$("#btn1").html(questions[count].choice2);
			$("#btn2").html(questions[count].choice3);
			$("#btn3").html(questions[count].choice4);
			count ++;}	
		else{
			reset();						 
		}

		
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

	  
	 
	   $("#btnStart").click(newPlayer());
		
	   // $("#btnStart").on("click"), test();

});