var five=require('johnny-five');
var extras=require('./extras.js');
var songs=require('j5-songs');

var board = new five.Board({
	port:'COM10'
});


board.on("ready",function(){
 var piezo = new five.Piezo(3);
  board.repl.inject({
    piezo: piezo
  });
//	(new five.Led(13)).strobe(500); //hola mundo 

/*
	Play specifics songs
*/
extras.play_list(["mario-intro","mario-fanfare"],piezo,function(err,tunes){
	if(err) console.log(err,"error ");
	console.log(tunes);
});


/*
extras.play_list([],piezo,function(err,tunes){
	if(err) console.log(err,"error ");
	console.log(tunes);
});
	Play all  songs
*/
});//termina board 