
/*
coordinate punti piscina
[8,1]
[21,1]
[21,10]
[1,10]
*/

var piscina = POLYLINE([[8,1],[21,1],[21,10],[1,10]]);


/*
[8,1]
[1,1]
[1,22]
//[5,22]
[9,22]
[9,17]
[9.15,17]

[9.15,22.15]
//[5,22.15]
[0.85,22.15]
[0.85,0.85]
[8,0.85]
[8,1]


*/
//var muroSinistra= POLYLINE([[8,1], [1,1], [1,22], [5,22], [5,22.15], [0.85,22.15], [0.85,0.85], [8,0.85], [8,1]]);
var muroSinistra= POLYLINE([[8,1], [1,1], [1,22], [9,22], [9,17], [9.15,17], [9.15,22.15], [0.85,22.15], [0.85,0.85], [8,0.85], [8,1]]);


/*

[1,17.10]
[4.95,17.10]
[4,95,22]
[5.05,22]
[5.05,17.10]
[9,17.10]
[9,17]
[1,17]
[1,17.10]

*/
var muro1StanzettaSinistra = POLYLINE([[1,17.10], [4.95,17.10], [4.95,22], [5.05,22], [5.05,17.10], [9,17.10], [9,17], [1,17], [1,17.10]]);





/*
[5.05,20.85]
[6.95,20.85]
[6.95,22]
[7.05,22]
[7.05,20.85]
[9,20.85]
[9,20.75]
[5.05,20.75]
[5.05,20.85]

*/

var muro2StanzettaSinistra = POLYLINE([[5.05,20.85], [6.95,20.85], [6.95,22], [7.05,22], [7.05,20.85], [9,20.85], [9,20.75], [5.05,20.75], [5.05,20.85]]);




/*
[7.5,15.15]
[26.5,15.15]
[26.5,15]
[7.5,15]
[7.5,15.15]
*/

var muroPanchina = POLYLINE([[6,15.15], [26.5,15.15], [26.5,15], [6,15], [6,15.15]]);



/*
[37.5,16.15],
[51.15,16.15],
[51.15, 4.85],
[41.5, 4.85],
[41.5, 5],
[51, 5],
[51, 16],
[37.5, 16],
[37.5,16.15]

*/

var muroDestra = POLYLINE([[37.5,16.15], [51.15,16.15], [51.15, 4.85], [41.5, 4.85], [41.5, 5], [51, 5], [51, 16], [37.5, 16], [37.5,16.15]]);




/*
[26,7.35], 
[34,7.35], 
[34,7.20], 
[26,7.20], 
[26,7.35] 

*/

var muroEsterno1 = POLYLINE([[25,7.35], [34,7.35], [34,7.20], [25,7.20], [25,7.35]]);


/* //largo 10
[30, 13.75], 
[40, 13.75], 
[40, 13.65], 
[30, 13.65], 
[30, 13.75]


*/

var muroEsterno2 = POLYLINE ([[30, 13.75], [40, 13.75], [40, 13.65], [30, 13.65], [30, 13.75]]);




/* largo 15
[37.5, 11.425], 
[42.5, 11.425], 
[42.5, 11.575], 
[37.5, 11.575], 
[37.5, 11.425]

11.575

*/

var muro1StanzettaDestra = POLYLINE([[37.5, 11.425], [42.5, 11.425], [42.5, 11.575], [37.5, 11.575], [37.5, 11.425]]);




/* largo 10
[44.7, 14.1], 
[44.7, 6.9], 
[44.8, 6.9], 
[44.8, 14.1], 
[44.7, 14.1]

*/

var muro2StanzettaDestra = POLYLINE([[44.7, 14.1], [44.7, 6.9], [44.8, 6.9], [44.8, 14.1], [44.7, 14.1]]);

var getSquares = function(param){
	var fromX = param[0][0];
	var fromY = param[0][1];
	var toX = param[1][0];
	var toY = param[1][1];
  var squares = STRUCT([]);
  var yDiff = toY - fromY;
  var xDiff = toX - fromX;
  var line;
  for (var i = 1; i<=yDiff; i++) { //orizzontali
   line = POLYLINE([[fromX,(fromY+i)],[toX,(fromY+i)]]);
   squares.add(line);
  }
  for (var j = 1; j<=xDiff; j++) {
  
   line = POLYLINE([[(fromX+j),fromY],[(fromX+j),toY]]);
   squares.add(line);
  }
  return squares;
}


var squares1 = getSquares([[0,0],[39,1]]);
squares1.add(POLYLINE([[0,0],[39,0]]));
var squares2 = getSquares([[0,1],[1,2]]);
squares2.add(POLYLINE([[0,2],[0,1]]));
var squares3 = getSquares([[1,10],[9,22]]);
var squares4 = getSquares([[9,10],[39,17]]);
var squares5 = getSquares([[21,1],[36,10]]);
var squares6 = getSquares([[36,4],[47,10]]);
squares6.add(POLYLINE([[36,4],[47,4]]));
var squares7 = getSquares([[39,10],[47,16]]);
var squares8 = getSquares([[47,4],[52,5]]);
squares8.add(POLYLINE([[47,4],[52,4]]));
var squares9 = getSquares([[51,5],[52,6]]);

var mapSquares = STRUCT([squares1,squares2,squares3,squares4,squares5,squares6,squares7,squares8,squares9]);


var panchina = STRUCT([
  POLYLINE([[6.8,14],[22,14]]), //orizzontali
  POLYLINE([[6.8,14.6],[22,14.6]]),
  POLYLINE([[6.8,14],[6.8,14.6]]), //verticali
  POLYLINE([[9.2,14],[9.2,14.6]]),
  POLYLINE([[11.3,14],[11.3,14.6]]),
  POLYLINE([[13.4,14],[13.4,14.6]]),
  POLYLINE([[15.5,14],[15.5,14.6]]),
  POLYLINE([[17.6,14],[17.6,14.6]]),
  POLYLINE([[19.7,14],[19.7,14.6]]),
  POLYLINE([[22,14],[22,14.6]])
]);



var cosoIndefinibile1 = POLYLINE([[31,13.65],[32,13.65],[32,7.35],[31,7.35],[31,13.65]]);
var cosoIndefinibile2 = POLYLINE([[32.3,12],[33.2,12],[33.2,9],[32.3,9],[32.3,12]]);
var cosoIndefinibile3 = POLYLINE([[39.6,11],[40.4,11],[40.4,10.2],[39.6,10.2],[39.6,11]]);

var coseIndefinibiliStanzetta = STRUCT([
  POLYLINE([[2.3,18.4],[3.7,18.4],[3.7,17.2],[2.3,17.2],[2.3,18.4]])
  
  
]);



var quadratiniNeri = STRUCT([
  POLYLINE([[32.5,13],[33,13],[33,12.5],[32.5,12.5],[32.5,13],[33,12.5]]), //quad 1
  POLYLINE([[33,13],[32.5,12.5]]),
  
  POLYLINE([[32.5,8.5],[33,8.5],[33,8],[32.5,8],[32.5,8.5],[33,8]]), //quad 2
  POLYLINE([[33,8.5],[32.5,8]]),
  
  POLYLINE([[38.75,11],[39.25,11],[39.25,10.5],[38.75,10.5],[38.75,11],[39.25,10.5]]), //quad 3
  POLYLINE([[39.25,11],[38.75,10.5]]),
  
  POLYLINE([[40.75,11],[41.25,11],[41.25,10.5],[40.75,10.5],[40.75,11],[41.25,10.5]]), //quad 4
  POLYLINE([[41.25,11],[40.75,10.5]]),
  
  POLYLINE([[41.7,9.3],[42.3,9.3],[42.3,8.7],[41.7,8.7],[41.7,9.3],[42.3,8.7]]), //quad 5
  POLYLINE([[42.3,9.3],[41.7,8.7]]),
  
  POLYLINE([[41.7,8.3],[42.3,8.3],[42.3,7.7],[41.7,7.7],[41.7,8.3],[42.3,7.7]]), //quad 6
  POLYLINE([[42.3,8.3],[41.7,7.7]])
]);


var scalette = STRUCT([
  POLYLINE([[36,1],[39,1]]), //orizzontali
  POLYLINE([[36,4],[39,4]]),
 
  POLYLINE([[36,1],[36,4]]), //verticali
  POLYLINE([[(36+(1*(3/8))),1],[(36+(1*(3/8))),4]]),
  POLYLINE([[(36+(2*(3/8))),1],[(36+(2*(3/8))),4]]),
  POLYLINE([[(36+(3*(3/8))),1],[(36+(3*(3/8))),4]]),
  POLYLINE([[(36+(4*(3/8))),1],[(36+(4*(3/8))),4]]),
  POLYLINE([[(36+(5*(3/8))),1],[(36+(5*(3/8))),4]]),
  POLYLINE([[(36+(6*(3/8))),1],[(36+(6*(3/8))),4]]),
  POLYLINE([[(36+(7*(3/8))),1],[(36+(7*(3/8))),4]]),
  POLYLINE([[(36+(8*(3/8))),1],[(36+(8*(3/8))),4]]),
  
  
  POLYLINE([[36,2.5],[(36+(1*(3/8))),2.5]]), //interne in mezzo
  POLYLINE([[(36+(2*(3/8))),2.5],[(36+(3*(3/8))),2.5]]),
	POLYLINE([[(36+(4*(3/8))),2.5],[(36+(5*(3/8))),2.5]]),
	POLYLINE([[(36+(6*(3/8))),2.5],[(36+(7*(3/8))),2.5]]),
	
	
	
	POLYLINE([[(36+(1*(3/8))),3],[(36+(2*(3/8))),3]]), //interne laterali
	POLYLINE([[(36+(1*(3/8))),2],[(36+(2*(3/8))),2]]),
	POLYLINE([[(36+(3*(3/8))),3],[(36+(4*(3/8))),3]]),
	POLYLINE([[(36+(3*(3/8))),2],[(36+(4*(3/8))),2]]),
	POLYLINE([[(36+(5*(3/8))),3],[(36+(6*(3/8))),3]]),
	POLYLINE([[(36+(5*(3/8))),2],[(36+(6*(3/8))),2]]),
	POLYLINE([[(36+(7*(3/8))),3],[(36+(8*(3/8))),3]]),
	POLYLINE([[(36+(7*(3/8))),2],[(36+(8*(3/8))),2]])
	
]);


var costruzione = STRUCT([piscina,muroSinistra,
  muro1StanzettaSinistra,muro2StanzettaSinistra,muroPanchina,
  muroDestra,muroEsterno1,muroEsterno2,muro1StanzettaDestra,
  muro2StanzettaDestra,panchina,scalette,cosoIndefinibile1,
  cosoIndefinibile2,cosoIndefinibile3,quadratiniNeri,coseIndefinibiliStanzetta]);

COLOR([0,0,0])(costruzione);
var pavilion = STRUCT([costruzione,mapSquares]);




DRAW(pavilion);






