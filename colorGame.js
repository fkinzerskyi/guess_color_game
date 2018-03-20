/*======================DEFAULT============================*/

var palette  = ['red','PeachPuff','blue','grey','yellow',
	'DeepSkyBlue','DarkGreen','SaddleBrown','red',
	'PeachPuff','blue','grey','yellow','DeepSkyBlue',
	'DarkGreen','SaddleBrown']

var clickCounter = 0;
var guessedPairs = 0;
var activeColors = [];
var activeBoxes = [];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(palette);



/*=====================GAME LOGIC=========================*/

$( ".bl" ).click(function() {
	++clickCounter;
	
	let index = this.className.split('');
	let number = parseInt((index.slice(5, 8).join('')));
  	$(this).css( "backgroundColor", palette[number - 1] );
  	activeColors.push($(this).css("backgroundColor"));
  	activeBoxes.push($(this).attr('class').split(' ')[0]);
  	if (clickCounter == 2) {
  		if (activeColors[0] == activeColors[1]) {
  			clickCounter = 0;
  			activeColors = [];
  			activeBoxes = [];
  			//guessedPairs++;
  			
  		}
  	}
  	if (clickCounter == 3) {
  		  	$("." + activeBoxes[0]).css( "backgroundColor", "" );
  			$("." + activeBoxes[1]).css( "backgroundColor", "" );
  			clickCounter = 1;
  			// activeBoxes = [];
  			// activeColors = [];
  			activeBoxes.shift();
  			activeBoxes.shift();
  			activeColors.shift();
  			activeColors.shift();
  	}
  	
});



















































// $( ".bl" ).each(function( index, element ) {
// 	$( element ).addClass( "notAllowd" );
//   });

// $( ".bl" ).each(function( index, element ) {
// 	$( element ).css( "backgroundColor", palette[index] );
//   });