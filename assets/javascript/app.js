window.onload = function() {
	$('.container2').hide();
	$('#start').on('click', function() {
		$('.container1').hide();
		$('.container2').fadeIn();
		run();
	});
};

var timerStart = 15;
var number = timerStart;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choices1 = ["Jaime Lannister", "Frodo Baggins", "Cersei Lannister", "Jeor Mormont"];
var choices2 = ["Grey Wind", "White Fang", "Ghost", "Kiba"];
var choices3 = ["Dragonfire", "Wildfire", "Godsfire", "Boatsonfire"];
var choices4 = ["A Golden Crown", "The Assassin's Dagger", "Killing in the Name", "The Rains of Castermere"];
var choices5 = ["Hulk Hogan", "Ned Stark", "Littlefinger", "Oberyn Martell"];
var choices6 = ["Grey Direwolf", "Red Dragon", "Upside-Down Red Flayed Man", "Stag"];
var choices7 = ["The Chipmunks", "Children of the Forest", "Children of the Corn", "The Andals"];
var choices8 = ["Mance Rayder", "Ser Davos", "Lady Melisandre", "Lady Galadriel"];

function run() {
	counter = setInterval(decrement1, 1000);
	question1();
	$('#section2').hide();
	$('#section3').hide();
	$('#section4').hide();
	$('#section5').hide();
	$('#section6').hide();
	$('#section7').hide();
	$('#section8').hide();
	$('#section9').hide();
}

function decrement1() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionOne').remove();
		$('#choice1').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice3').hide();
		$('#choice4').hide();
		setTimeout(question2, 2000);
	}
}

function question1() {
	$('#questionOne').html("Who pushed Bran Stark out the window in Season 1?");
	
	$('#choice1').html(choices1[0]);
	$('#choice2').html(choices1[1]);
	$('#choice3').html(choices1[2]);
	$('#choice4').html(choices1[3]);

	$('#choice1').on('click', function() {
		correct++;
		stop();
		$('#questionOne').html('<div>Correct!</div>');
		$('#choice1').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice2').hide();
		$('#choice3').hide();
		$('#choice4').hide();
		setTimeout(question2, 2000);
	})

	$('#choice2').on('click', function() {
		incorrect++;
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice3').hide();
		$('#choice4').hide();
		setTimeout(question2, 2000);
	});

	$('#choice3').on('click', function() {
		incorrect++;
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice3').hide();
		$('#choice4').hide();
		setTimeout(question2, 2000);
	});

	$('#choice4').on('click', function() {
		incorrect++;
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice3').hide();
		$('#choice4').hide();
		setTimeout(question2, 2000);
	});

}

function decrement2() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionTwo').remove();
		$('#choice5').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>');
		$('#choice7').hide();
		$('#choice8').hide();
		setTimeout(question3, 2000);
	}	
}

function question2() {
	$('#section1').hide();
	$('#section2').fadeIn();
	number = timerStart;
	counter = setInterval(decrement2, 1000);

	$('#questionTwo').html("What is the name of Jon Snow's Direwolf?");

	$('#choice5').html(choices2[0]);
	$('#choice6').html(choices2[1]);
	$('#choice7').html(choices2[2]);
	$('#choice8').html(choices2[3]);

	$('#choice5').on('click', function() {
		incorrect++;
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>');
		$('#choice7').hide();
		$('#choice8').hide();
		setTimeout(question3, 2000);
	})

	$('#choice6').on('click', function() {
		incorrect++
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>');
		$('#choice7').hide();
		$('#choice8').hide();
		setTimeout(question3, 2000);
	})

	$('#choice7').on('click', function() {
		correct++;
		stop();
		$('#questionTwo').html('<div>Correct!</div>');
		$('#choice5').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>');
		$('#choice6').hide();
		$('#choice7').hide();
		$('#choice8').hide();
		setTimeout(question3, 2000);
	})	

	$('#choice8').on('click', function() {
		incorrect++;
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200s>');
		$('#choice7').hide();
		$('#choice8').hide();
		setTimeout(question3, 2000);
	})

}

function decrement3() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionThree').remove();
		$('#choice9').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>');
		$('#choice11').hide();
		$('#choice12').hide();
		setTimeout(question4, 2000);
	}	
}

function question3() {
	$('#section2').hide();
	$('#section3').fadeIn();
	number = timerStart;
	counter = setInterval(decrement3, 1000);

	$('#questionThree').html("What's the name of the explosive used in the Battle of Blackwater?");

	$('#choice9').html(choices3[0]);
	$('#choice10').html(choices3[1]);
	$('#choice11').html(choices3[2]);
	$('#choice12').html(choices3[3]);

	$('#choice9').on('click', function() {
		incorrect++;
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>');
		$('#choice11').hide();
		$('#choice12').hide();
		setTimeout(question4, 2000);
	})

	$('#choice10').on('click', function() {
		correct++;
		stop();
		$('#questionThree').html('<div>Correct!</div>');
		$('#choice9').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>');
		$('#choice10').hide();
		$('#choice11').hide();
		$('#choice12').hide();
		setTimeout(question4, 2000);
	})

	$('#choice11').on('click', function() {
		incorrect++;
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>');
		$('#choice11').hide();
		$('#choice12').hide();
		setTimeout(question4, 2000);
	})	

	$('#choice12').on('click', function() {
		incorrect++;
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200s>');
		$('#choice11').hide();
		$('#choice12').hide();
		setTimeout(question4, 2000);
	})
}

function decrement4() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionFour').remove();
		$('#choice13').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice15').hide();
		$('#choice16').hide();
		setTimeout(question5, 2000);
	}	
}

function question4() {
	$('#section3').hide();
	$('#section4').fadeIn();
	number = timerStart;
	counter = setInterval(decrement4, 1000);

	$('#questionFour').html("Which Lannister song signalled doom at the Red Wedding?");

	$('#choice13').html(choices4[0]);
	$('#choice14').html(choices4[1]);
	$('#choice15').html(choices4[2]);
	$('#choice16').html(choices4[3]);

	$('#choice13').on('click', function() {
		incorrect++;
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice15').hide();
		$('#choice16').hide();
		setTimeout(question5, 2000);
	})

	$('#choice14').on('click', function() {
		incorrect++
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice15').hide();
		$('#choice16').hide();
		setTimeout(question5, 2000);
	})

	$('#choice15').on('click', function() {
		incorrect++;
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice15').hide();
		$('#choice16').hide();
		setTimeout(question5, 2000);
	})	

	$('#choice16').on('click', function() {
		correct++;
		stop();
		$('#questionFour').html('<div>Correct!</div>');
		$('#choice13').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice14').hide();
		$('#choice15').hide();
		$('#choice16').hide();
		setTimeout(question5, 2000);
	})
}

function decrement5() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionFive').remove();
		$('#choice17').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice19').hide();
		$('#choice20').hide();
		setTimeout(question6, 2000);
	}	
}

function question5() {
	$('#section4').hide();
	$('#section5').fadeIn();
	number = timerStart;
	counter = setInterval(decrement5, 1000);

	$('#questionFive').html("Whose skull was crushed by the Mountain's giant hands?");

	$('#choice17').html(choices5[0]);
	$('#choice18').html(choices5[1]);
	$('#choice19').html(choices5[2]);
	$('#choice20').html(choices5[3]);

	$('#choice17').on('click', function() {
		incorrect++;
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice19').hide();
		$('#choice20').hide();
		setTimeout(question6, 2000);
	})

	$('#choice18').on('click', function() {
		incorrect++;
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice19').hide();
		$('#choice20').hide();
		setTimeout(question6, 2000);
	})

	$('#choice19').on('click', function() {
		incorrect++;
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice19').hide();
		$('#choice20').hide();
		setTimeout(question6, 2000);
	})	

	$('#choice20').on('click', function() {
		correct++;
		stop();
		$('#questionFive').html('<div>Correct!</div>');
		$('#choice17').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice18').hide();
		$('#choice19').hide();
		$('#choice20').hide();
		setTimeout(question6, 2000);
	})
}

function decrement6() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionSix').remove();
		$('#choice21').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>')
		$('#choice23').hide();
		$('#choice24').hide();
		setTimeout(question7, 2000);
	}	
}

function question6() {
	$('#section5').hide();
	$('#section6').fadeIn();
	number = timerStart;
	counter = setInterval(decrement6, 1000);

	$('#questionSix').html("What is House Targaryen's Sigil?");
	
	$('#choice21').html(choices6[0]);
	$('#choice22').html(choices6[1]);
	$('#choice23').html(choices6[2]);
	$('#choice24').html(choices6[3]);

	$('#choice21').on('click', function() {
		incorrect++;
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>')
		$('#choice23').hide();
		$('#choice24').hide();
		setTimeout(question7, 2000);
	})

	$('#choice22').on('click', function() {
		correct++;
		stop();
		$('#questionSix').html('<div>Correct!</div>');
		$('#choice21').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>');
		$('#choice22').hide();
		$('#choice23').hide();
		$('#choice24').hide();
		setTimeout(question7, 2000);
	})

	$('#choice23').on('click', function() {
		incorrect++;
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>');
		$('#choice23').hide();
		$('#choice24').hide();
		setTimeout(question7, 2000);
	})	

	$('#choice24').on('click', function() {
		incorrect++;
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>');
		$('#choice23').hide();
		$('#choice24').hide();
		setTimeout(question7, 2000);
	})
}

function decrement7() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionSeven').remove();
		$('#choice25').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice27').hide();
		$('#choice28').hide();
		setTimeout(question8, 2000);
	}	
}

function question7() {
	$('#section6').hide();
	$('#section7').fadeIn();
	number = timerStart;
	counter = setInterval(decrement7, 1000);

	$('#questionSeven').html("Who created the White Walkers?");

	$('#choice25').html(choices7[0]);
	$('#choice26').html(choices7[1]);
	$('#choice27').html(choices7[2]);
	$('#choice28').html(choices7[3]);

	$('#choice25').on('click', function() {
		incorrect++;
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice27').hide();
		$('#choice28').hide();
		setTimeout(question8, 2000);
	})

	$('#choice26').on('click', function() {
		correct++;
		stop();
		$('#questionSeven').html('<div>Correct!</div>');
		$('#choice25').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice26').hide();
		$('#choice27').hide();
		$('#choice28').hide();
		setTimeout(question8, 2000);
	})

	$('#choice27').on('click', function() {
		incorrect++;
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice27').hide();
		$('#choice28').hide();
		setTimeout(question8, 2000);
	})	

	$('#choice28').on('click', function() {
		incorrect++;
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice27').hide();
		$('#choice28').hide();
		setTimeout(question8, 2000);
	})
}

function decrement8() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		unanswered++;
		$('#timer').html('Times Up!');
		$('#questionEight').remove();
		$('#choice29').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice31').hide();
		$('#choice32').hide();
		setTimeout(result, 2000);
	}	
}

function question8() {
	$('#section7').hide();
	$('#section8').fadeIn();
	number = timerStart;
	counter = setInterval(decrement8, 1000);

	$('#questionEight').html("Who resurrects Jon Snow?");

	$('#choice29').html(choices8[0]);
	$('#choice30').html(choices8[1]);
	$('#choice31').html(choices8[2]);
	$('#choice32').html(choices8[3]);

	$('#choice29').on('click', function() {
		incorrect++;
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice31').hide();
		$('#choice32').hide();
		setTimeout(result, 2000);
		
	})

	$('#choice30').on('click', function() {
		incorrect++;
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice31').hide();
		$('#choice32').hide();
		setTimeout(result, 2000);
		
	})

	$('#choice31').on('click', function() {
		correct++;
		stop();
		$('#questionEight').html('<div>Correct!</div>');
		$('#choice29').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice30').hide();
		$('#choice31').hide();
		$('#choice32').hide();
		setTimeout(result, 2000);
	
	})	

	$('#choice32').on('click', function() {
		incorrect++;
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div style="color: darkred; font-size: 40px; font: bold; font-family: Arial, Helvetica Neue, Helvetica, sans-serif">' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice31').hide();
		$('#choice32').hide();
		setTimeout(result, 2000);
	
	})
}

function result() {
	$('#section8').hide();
	$('#section9').fadeIn();

	$('#correctCount').html('<div>Correct: ' + correct + '</div>')

	$('#incorrectCount').html('<div>Incorrect: ' + incorrect + '</div>');

	$('#unansweredCount').html('<div>Unanswered: ' + unanswered + '</div>');

}

function stop() {
	clearInterval(counter);
}