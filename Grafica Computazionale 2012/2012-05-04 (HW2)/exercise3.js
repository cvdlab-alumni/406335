var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);


//stabilizzatori

//var pLS = [[0,0,0],[4,1,0],[14,6,0],[14,6,0],[2,6.5,0],[0.5,4,0]];
var pLS = [[0,0,0],[4,1,0],[5,1,0],[6,2,0],[7.5,5,0],[8.5,5,0],[9.5,5,0],[7.5,5,0],[2,6.5,0],[2,6.5,0],[2,6.5,0],[0.5,4,0]];
var pLS2 = [[0.5,4,0],[0,0,0]];
var cLS = BEZIER(S0)(pLS);
var cLS2 = BEZIER(S0)(pLS2);



var LS = BEZIER(S1)([cLS,cLS2]);
//var RS = 

var leftStab = MAP(LS)(domain2);

var rightStab = S([0])([-1])(leftStab);

//vertical




var pVS = [[0,0,0],[4,2,0],[5,3,0],[5,7.5,0],[5,7.5,0],[5,7.5,0],[5,7.5,0],[0,8,0],[-1.5,5,0]];
var pVS2 = [[-1.5,5,0],[0,3.75,0]];
var pVS3 = [[0,0,0],[0,3.75,0]];
var cVS = BEZIER(S0)(pVS);
var cVS2 = BEZIER(S0)(pVS2);
var cVS3 = BEZIER(S0)(pVS3);




var VS = BEZIER(S1)([cVS,cVS2,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,
cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3,cVS3]);
 

var verticalStab = MAP(VS)(domain2);

verticalStab = R([0,2])(-Math.PI/2)(verticalStab);

var stabs = COLOR([1,0.85,0])(STRUCT([leftStab,rightStab,verticalStab]));
DRAW(stabs);




