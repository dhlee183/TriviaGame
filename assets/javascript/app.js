window.onload = function() {
	$('.container2').hide();
	$('#start').on('click', function() {
		$('.container1').fadeOut();
		$('.container2').fadeIn();
		run();
	});
};

var timerStart = 20;
var number = timerStart;

function run() {
	counter = setInterval(decrement, 1000)
	question1();
	$('#section2').hide();
	$('#section3').hide();
	$('#section4').hide();
	$('#section5').hide();
	$('#section6').hide();
	$('#section7').hide();
	$('#section8').hide();
}

function decrement() {
	number--;
	$('#timer').html('<h2>Time Remaining: ' + number + '</h2>');
	
	if (number === 0) {
		stop();
		$('#timer').html('Time Up')
	}
}

function question1() {
	$('#questionOne').html("Who pushed Bran Stark out the window in Season 1?");
	
	var choices1 = ["Jaime Lannister", "Frodo Baggins", "Cersei Lannister", "Jeor Mormont"]

	$('#choice1').html(choices1[0]);
	$('#choice2').html(choices1[1]);
	$('#choice3').html(choices1[2]);
	$('#choice4').html(choices1[3]);

	$('#choice1').on('click', function() {
		stop();
		$('#questionOne').html('<div>Correct!</div>');
		$('#choice1').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>');
		$('#choice2').remove();
		$('#choice3').remove();
		$('#choice4').remove();
		setTimeout(question2, 2000);
	})

	$('#choice2').on('click', function() {
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div>' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>')
		$('#choice3').remove();
		$('#choice4').remove();
		setTimeout(question2, 2000);
	})

	$('#choice3').on('click', function() {
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div>' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>')
		$('#choice3').remove();
		$('#choice4').remove();
		setTimeout(question2, 2000);
	})

	$('#choice4').on('click', function() {
		stop();
		$('#questionOne').html('<div>Wrong!</div>');
		$('#choice1').replaceWith('<div>' + choices1[0] + '</div>');
		$('#choice2').replaceWith('<img src=assets/images/jaime.gif height=200 width=200>')
		$('#choice3').remove();
		$('#choice4').remove();
		setTimeout(question2, 2000);
	})

}

function question2() {
	$('#section1').remove();
	$('#section2').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionTwo').html("What is the name of Jon Snow's Direwolf?");
	
	var choices2 = ["Grey Wind", "White Fang", "Ghost", "Kiba"]

	$('#choice5').html(choices2[0]);
	$('#choice6').html(choices2[1]);
	$('#choice7').html(choices2[2]);
	$('#choice8').html(choices2[3]);

	$('#choice5').on('click', function() {
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div>' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>')
		$('#choice7').remove();
		$('#choice8').remove();
		setTimeout(question3, 2000);
	})

	$('#choice6').on('click', function() {
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div>' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>')
		$('#choice7').remove();
		$('#choice8').remove();
		setTimeout(question3, 2000);
	})

	$('#choice7').on('click', function() {
		stop();
		$('#questionTwo').html('<div>Correct!</div>');
		$('#choice5').replaceWith('<img src=assets/images/ghost.gif height=200 width=200>');
		$('#choice6').remove();
		$('#choice7').remove();
		$('#choice8').remove();
		setTimeout(question3, 2000);
	})	

	$('#choice8').on('click', function() {
		stop();
		$('#questionTwo').html('<div>Wrong!</div>');
		$('#choice5').replaceWith('<div>' + choices2[2] + '</div>');
		$('#choice6').replaceWith('<img src=assets/images/ghost.gif height=200 width=200s>')
		$('#choice7').remove();
		$('#choice8').remove();
		setTimeout(question3, 2000);
	})

}

function question3() {
	$('#section2').remove();
	$('#section3').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionThree').html("What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?");
	
	var choices3 = ["Dragonfire", "Wildfire", "Godsfire", "Boatsonfire"]

	$('#choice9').html(choices3[0]);
	$('#choice10').html(choices3[1]);
	$('#choice11').html(choices3[2]);
	$('#choice12').html(choices3[3]);

	$('#choice9').on('click', function() {
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div>' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>')
		$('#choice11').remove();
		$('#choice12').remove();
		setTimeout(question4, 2000);
	})

	$('#choice10').on('click', function() {
		stop();
		$('#questionThree').html('<div>Correct!</div>');
		$('#choice9').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>');
		$('#choice10').remove();
		$('#choice11').remove();
		$('#choice12').remove();
		setTimeout(question4, 2000);
	})

	$('#choice11').on('click', function() {
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div>' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200>')
		$('#choice11').remove();
		$('#choice12').remove();
		setTimeout(question4, 2000);
	})	

	$('#choice12').on('click', function() {
		stop();
		$('#questionThree').html('<div>Wrong!</div>');
		$('#choice9').replaceWith('<div>' + choices3[1] + '</div>');
		$('#choice10').replaceWith('<img src=assets/images/wildfire.gif height=200 width=200s>')
		$('#choice11').remove();
		$('#choice12').remove();
		setTimeout(question4, 2000);
	})
}

function question4() {
	$('#section3').remove();
	$('#section4').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionFour').html("Which Lannister song signalled doom at the Red Wedding?");
	
	var choices4 = ["A Golden Crown", "The Assassin's Dagger", "Killing in the Name", "The Rains of Castermere"]

	$('#choice13').html(choices4[0]);
	$('#choice14').html(choices4[1]);
	$('#choice15').html(choices4[2]);
	$('#choice16').html(choices4[3]);

	$('#choice13').on('click', function() {
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div>' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>')
		$('#choice15').remove();
		$('#choice16').remove();
		setTimeout(question5, 2000);
	})

	$('#choice14').on('click', function() {
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div>' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>')
		$('#choice15').remove();
		$('#choice16').remove();
		setTimeout(question5, 2000);
	})

	$('#choice15').on('click', function() {
		stop();
		$('#questionFour').html('<div>Wrong!</div>');
		$('#choice13').replaceWith('<div>' + choices4[3] + '</div>');
		$('#choice14').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>')
		$('#choice15').remove();
		$('#choice16').remove();
		setTimeout(question5, 2000);
	})	

	$('#choice16').on('click', function() {
		stop();
		$('#questionFour').html('<div>Correct!</div>');
		$('#choice13').replaceWith('<img src=assets/images/redwedding.gif height=200 width=200>');
		$('#choice14').remove();
		$('#choice15').remove();
		$('#choice16').remove();
		setTimeout(question5, 2000);
	})
}

function question5() {
	$('#section4').remove();
	$('#section5').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionFive').html("Whose skull was crushed by the Mountain's giant hands?");
	
	var choices5 = ["Hulk Hogan", "Ned Stark", "Littlefinger", "Oberyn Martell"]

	$('#choice17').html(choices5[0]);
	$('#choice18').html(choices5[1]);
	$('#choice19').html(choices5[2]);
	$('#choice20').html(choices5[3]);

	$('#choice17').on('click', function() {
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div>' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>')
		$('#choice19').remove();
		$('#choice20').remove();
		setTimeout(question6, 2000);
	})

	$('#choice18').on('click', function() {
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div>' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>')
		$('#choice19').remove();
		$('#choice20').remove();
		setTimeout(question6, 2000);
	})

	$('#choice19').on('click', function() {
		stop();
		$('#questionFive').html('<div>Wrong!</div>');
		$('#choice17').replaceWith('<div>' + choices5[3] + '</div>');
		$('#choice18').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>')
		$('#choice19').remove();
		$('#choice20').remove();
		setTimeout(question6, 2000);
	})	

	$('#choice20').on('click', function() {
		stop();
		$('#questionFive').html('<div>Correct!</div>');
		$('#choice17').replaceWith('<img src=assets/images/mountain.gif height=200 width=200>');
		$('#choice18').remove();
		$('#choice19').remove();
		$('#choice20').remove();
		setTimeout(question6, 2000);
	})
}

function question6() {
	$('#section5').remove();
	$('#section6').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionSix').html("What is House Targaryen's Sigil?");
	
	var choices6 = ["Grey Direwolf", "Red Dragon", "Upside-Down Red Flayed Man", "Stag"]

	$('#choice21').html(choices6[0]);
	$('#choice22').html(choices6[1]);
	$('#choice23').html(choices6[2]);
	$('#choice24').html(choices6[3]);

	$('#choice21').on('click', function() {
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div>' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>')
		$('#choice23').remove();
		$('#choice24').remove();
		setTimeout(question7, 2000);
	})

	$('#choice22').on('click', function() {
		stop();
		$('#questionSix').html('<div>Correct!</div>');
		$('#choice21').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>');
		$('#choice22').remove();
		$('#choice23').remove();
		$('#choice24').remove();
		setTimeout(question7, 2000);
	})

	$('#choice23').on('click', function() {
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div>' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>')
		$('#choice23').remove();
		$('#choice24').remove();
		setTimeout(question7, 2000);
	})	

	$('#choice24').on('click', function() {
		stop();
		$('#questionSix').html('<div>Wrong!</div>');
		$('#choice21').replaceWith('<div>' + choices6[1] + '</div>');
		$('#choice22').replaceWith('<img src=assets/images/tsigil.gif height=200 width=200>')
		$('#choice23').remove();
		$('#choice24').remove();
		setTimeout(question7, 2000);
	})
}

function question7() {
	$('#section6').remove();
	$('#section7').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionSeven').html("Who created the White Walkers?");
	
	var choices7 = ["The Chipmunks", "Children of the Forest", "Children of the Corn", "The Andals"]

	$('#choice25').html(choices7[0]);
	$('#choice26').html(choices7[1]);
	$('#choice27').html(choices7[2]);
	$('#choice28').html(choices7[3]);

	$('#choice25').on('click', function() {
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div>' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>')
		$('#choice27').remove();
		$('#choice28').remove();
		setTimeout(question8, 2000);
	})

	$('#choice26').on('click', function() {
		stop();
		$('#questionSeven').html('<div>Correct!</div>');
		$('#choice25').replaceWith('<img src=assets/images/forest.gif height=200 width=200>');
		$('#choice26').remove();
		$('#choice27').remove();
		$('#choice28').remove();
		setTimeout(question8, 2000);
	})

	$('#choice27').on('click', function() {
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div>' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>')
		$('#choice27').remove();
		$('#choice28').remove();
		setTimeout(question8, 2000);
	})	

	$('#choice28').on('click', function() {
		stop();
		$('#questionSeven').html('<div>Wrong!</div>');
		$('#choice25').replaceWith('<div>' + choices7[1] + '</div>');
		$('#choice26').replaceWith('<img src=assets/images/forest.gif height=200 width=200>')
		$('#choice27').remove();
		$('#choice28').remove();
		setTimeout(question8, 2000);
	})
}

function question8() {
	$('#section7').remove();
	$('#section8').fadeIn();
	number = timerStart;
	counter = setInterval(decrement, 1000)

	$('#questionEight').html("Who resurrects Jon Snow?");
	
	var choices8 = ["Mance Rayder", "Ser Davos", "Lady Melisandre", "Lady Galadriel"]

	$('#choice29').html(choices8[0]);
	$('#choice30').html(choices8[1]);
	$('#choice31').html(choices8[2]);
	$('#choice32').html(choices8[3]);

	$('#choice29').on('click', function() {
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div>' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>')
		$('#choice31').remove();
		$('#choice32').remove();
		
	})

	$('#choice30').on('click', function() {
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div>' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>')
		$('#choice31').remove();
		$('#choice32').remove();
		
	})

	$('#choice31').on('click', function() {
		stop();
		$('#questionEight').html('<div>Correct!</div>');
		$('#choice29').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>');
		$('#choice30').remove();
		$('#choice31').remove();
		$('#choice32').remove();;
	
	})	

	$('#choice32').on('click', function() {
		stop();
		$('#questionEight').html('<div>Wrong!</div>');
		$('#choice29').replaceWith('<div>' + choices8[2] + '</div>');
		$('#choice30').replaceWith('<img src=assets/images/resurrect.gif height=200 width=200>')
		$('#choice31').remove();
		$('#choice32').remove();
	
	})
}


function stop() {
	clearInterval(counter);
}

