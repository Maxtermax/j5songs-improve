var songs=require('j5-songs');


module.exports={
	play_list:function(list,piezo,cb){
		var names_songs=[];
		var self=this;//caching JSON father

		if( Array.isArray(list) && list[0] ){
			names_songs=list;
			//optional list specific songs
			songs.list(function(err,tunes){
				if(err) return cb(err);
				self.play({
					'Lyrics':names_songs,
					'DB':tunes,
					'callback':cb,
					'pi':piezo
				});	//call fn play specifics songs
				//console.log(names_songs);
			});
		}else{
			songs.list(function(err,tunes){
				if(err) return cb(err);
				for( i in tunes ){
					 names_songs.push(i);//push name of song
				}//get all songs
				self.play({
					'Lyrics':names_songs,
					'DB':tunes,
					'callback':cb,
					'pi':piezo
				});//call fn play to play all  songs
			
			});//find all songs to play
		};

	},//end fn play_list, depend fn play
	play:function(data){
		//data 
		//content infomation like what songs to play
		//Lyrics = name of the song to play
		//melody = songs available in "database"
		//callback = function of return
		//pi = function from song modules to play songs

		var e=0;//indice
		var NotFound=[];
		var tempo;
		var playing_name;
		var delay=5000;//delay between songs
		var available=0;

		for( i in data.DB ){
			//this variable i, is equals to the key of data.DB
			//http://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_in
			if( data.DB[ data.Lyrics[e] ] ){
				tempo=data.DB[data.Lyrics[e]]["tempo"];
				playing_name=data.Lyrics[e];
				
				//Closure width setTimeout inside bucle like loop to play 
				// http://brackets.clementng.me/post/24150213014/example-of-a-javascript-closure-settimeout-inside-a
				 
			var loop=setTimeout(function(tempo,playing_name,e){ 
						return function(){
						 var song = songs.load(playing_name);
							data.callback(null,{
								name:playing_name,	
								Data:data.DB[ data.Lyrics[e] ]
							});//if rigth return json with info of song playing now

							data.pi.play(song);//play it !!!
						//	console.log(available*delay, playing_name );
				
						};
				}(tempo,playing_name,e),available*delay);

				available++//sum good itereaciones 
			}else if(data.Lyrics[e]){
				NotFound.push(data.Lyrics[e]);
			};
			e++
		};//find Lyrics in the "database"
		if(NotFound[0]){
			var message_Not_Found="Not found, sorry you can see the songs available in \n https://www.npmjs.org/package/j5-songs";
			return data.callback("["+NotFound+"] >>> "+message_Not_Found,null );//error not found 
		};//return error width the song not founds :(
	}//end fn play 

}//end functions extras 
