var five=require('johnny-five');
var extras=require('./extras.js');
var songs=require('j5-songs');

var board = new five.Board({
	port:'COM10'
});

var t;

board.on("ready",function(){
 var piezo = new five.Piezo(3);
  board.repl.inject({
    piezo: piezo
  });
//"mario-intro","mario-fanfare"
extras.play_list([],piezo,function(err,tunes){
//	Play specifics songs
// test 
 console.log(tunes);


});



/*
extras.play_list([],piezo,function(err,tunes){
	if(err) console.log(err,"error ");
	console.log(tunes);
});
*/
//	Play all  songs


});//termina board 