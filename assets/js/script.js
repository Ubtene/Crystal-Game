
var wins = 0; 

var losses = 0;

var counter = 0 ;

var crystal1 = 0;

var crystal2 = 0;

var crystal3 = 0;

var crystal4 = 0;

var goalNumber = getRandomInt(12,120); 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function reset() {

goalNumber = getRandomInt(12,120);

$("#board1").html(goalNumber);

counter = 0; 

$("#board2").html("");

crystal1 = 0;

crystal2 = 0;

crystal3 = 0;

crystal4 = 0;

}



var audioElement = document.createElement("audio");

audioElement.setAttribute("src" , "assets/js/Theme-song.mp3");

$(".theme-button").on("click" , function () {

	audioElement.play();
	audioElement.loop = true; 

	});


$(".pause-button").on("click" , pauseSong)

function pauseSong () {


 audioElement.pause();


}

$('#board1').html(goalNumber); 


$("#crystal-1").on("click" , function () {

	if ( crystal1 === 0) {

		crystal1 = getRandomInt(1,12);
	}

	counter = counter + crystal1; 

	$("#board2").html(counter); 


 if (counter > goalNumber) {

		losses++;

	   $("#lossesplaceholder").html(losses);
	   reset();
	}


 else if (goalNumber === counter ) {

	wins++; 

	$("#winsplaceholder").html(wins);

	reset();

	}


	});


$("#crystal-2").on("click" , function () {

	if ( crystal2 === 0) {

		crystal2 = getRandomInt(1,12);
	}

	counter = counter + crystal2; 

	$("#board2").html(counter); 


	

    if (counter > goalNumber) {

		losses++;

	   $("#lossesplaceholder").html(losses);
	   reset();
	}



 else if (goalNumber === counter ) {


	wins++; 

	$("#winsplaceholder").html(wins);
	reset();
}


});


$("#crystal-3").on("click" , function () {



	if ( crystal3 === 0) {

		crystal3 = getRandomInt(1,12);
	}

	counter = counter + crystal3; 

	$("#board2").html(counter); 


		if (counter > goalNumber) {

		losses++;

	   $("#lossesplaceholder").html(losses);
	   reset();
	}


else if (goalNumber === counter ) {


	wins++; 
	

	$("#winsplaceholder").html(wins);
	
	reset();

}

    
});




$("#crystal-4").on("click" , function () {

		if ( crystal4 === 0) {

		crystal4 = getRandomInt(1,12);
	}

	counter = counter + crystal4; 

	$("#board2").html(counter); 




if (counter > goalNumber) {

		losses++;

	   $("#lossesplaceholder").html(losses);

	   reset();
		
	}

	
else if (goalNumber === counter ) {


	wins++; 
	

	$("#winsplaceholder").html(wins);

	reset();

}



    
	});