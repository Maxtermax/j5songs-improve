=======
APORTES A J5-SONGS
==============
![alt tag](http://3.bp.blogspot.com/-O1w0jS1rQcI/UDYKjp_ErpI/AAAAAAAAAn0/487yKpxMI80/s640/mario.PNG)

Este repositorio contiene un pequeño aporte para el modulo de node.js j5-songs, el aporte
consiste en una funcion 'play_list' que sirve para reproducir las canciones de 'j5-songs'en una lista 
de reproduccion con canciones especificas o de todas las canciones disponibles.

La funcion 'play'_list' tiene la siguiente sintaxis

```javascript
/*
Principalmente requiere definir el objeto piezo de johnny five e inyectar lo a el REPL
*/
 var piezo = new five.Piezo(3);
  board.repl.inject({
    piezo: piezo
  });

```

```javascript
/*
Se llama el metodo play_list que requiere un 
Array donde se definen las canciones que se quieren 
reproducir 	
*/

extras.play(["mario-intro","mario-fanfare"]);

```

```javascript
/*
	Como segunda parametro se quieres el objeto piezo definido anteriormente
*/

extras.play(["mario-intro","mario-fanfare"],piezo);

```

```javascript
/*
Lo que sigue es una funcion que retorna un error 
en caso que ocurra y los datos de la cancion que se esta reproduciendo 
*/
extras.play_list(["mario-intro","mario-fanfare"],piezo,function(err,tunes){
//	Play specifics songs
	if(err) console.log(err);
	console.log(tunes);
});
```
En caso de que se quiera reproducir todas las caciones disponible entonces se define exactamente de 
la misma manera anteriormente vista pero con un pequeño cambio que el Array se deja vacio, la unica 
desventaja potencial de esta funcion es que el tiempo de espera para reproducir la siguiente cancion 
puede ser mas grande entre mas canciones se definan, seria de gran ayuda si se revisa el codigo fuente extra.js
para encontrar una solucion. 



```javascript

extras.play_list([],piezo,function(err,tunes){
//	Play all songs
	if(err) console.log(err);
	console.log(tunes);
});


En de opcion libre la decision de  incluir o modificar esta funcion para añadir al modulo 'j5-songs'.

#CONTACTO
##	1- esneyder_a@hotmail.com 
##  2- esneyderamin@gmail.com 
##  3- https://twitter.com/Sneyder_A 
##From @Quibdojs  		 								 https://twitter.com/QuibdoJs