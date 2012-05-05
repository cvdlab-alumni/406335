
var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

//left superior
var p0 = [[2.4,0,0.2],[9.0,0,2],[9.0,0,-2],[4.4,0,1],[2.4,0,0.2],[2.4,0,0.2],[2.4,0,0.2]];
var p1 = [[0.8,1,0.2],[9.4,1,2],[9.4,1,-2],[4.8,1,1],[0.8,1,0.2],[0.8,1,0.2],[0.8,1,0.2]];
var p2 = [[0.3,3,0.2],[9.5,3,2],[9.5,3,-2],[4.9,3,1],[0.3,3,0.2],[0.3,3,0.2],[0.3,3,0.2]];
var p3 = [[0,5,0.2],[9.6,5,2],[9.6,5,-2],[5,5,1],[0,5,0.2],[0,5,0.2],[0,5,0.2]];
var p4 = p3.map(function (p) {return [p[0], p[1]+2, p[2]]});
var p5 = p3.map(function (p) {return [p[0], p[1]+4, p[2]]});
var p6 = p3.map(function (p) {return [p[0], p[1]+6, p[2]]});
var p7 = p3.map(function (p) {return [p[0], p[1]+8, p[2]]});
var p8 = p3.map(function (p) {return [p[0], p[1]+10, p[2]]});
var p9 = p3.map(function (p) {return [p[0], p[1]+12, p[2]]});
var p10 = p3.map(function (p) {return [p[0], p[1]+14, p[2]]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);
var controls = [c0,c1,c2,c3,c3,c3,c3,c3,c4,c5,c6,c7,c8,c9,c10];


var wing = BEZIER(S1)(controls);


var wing = COLOR([1,0.85,0])(MAP(wing)(domain2));

var leftSuperiorWing = T([0,2])([2.5,7.5])(wing);


//left inferior
var p0 = [[0.8,0,0.2],[9.4,0,2],[9.4,0,-2],[4.8,0,1],[0.8,0,0.2],[0.8,0,0.2],[0.8,0,0.2]];
var p1 = [[0,1,0.2],[9.6,1,2],[9.6,1,-2],[5,1,1],[0,1,0.2],[0,1,0.2],[0,1,0.2]];
var p2 = [[0,3,0.2],[9.6,3,2],[9.6,3,-2],[5,3,1],[0,3,0.2],[0,3,0.2],[0,3,0.2]];
var p3 = [[0,5,0.2],[9.6,5,2],[9.6,5,-2],[5,5,1],[0,5,0.2],[0,5,0.2],[0,5,0.2]];
var p4 = p3.map(function (p) {return [p[0], p[1]+2, p[2]]});
var p5 = p3.map(function (p) {return [p[0], p[1]+4, p[2]]});
var p6 = p3.map(function (p) {return [p[0], p[1]+6, p[2]]});
var p7 = p3.map(function (p) {return [p[0], p[1]+8, p[2]]});
var p8 = p3.map(function (p) {return [p[0], p[1]+10, p[2]]});
var p9 = p3.map(function (p) {return [p[0], p[1]+12, p[2]]});
var p10 = p3.map(function (p) {return [p[0], p[1]+14, p[2]]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);
var controls = [c0,c1,c2,c3,c3,c3,c3,c3,c4,c5,c6,c7,c8,c9,c10];


var wing = BEZIER(S1)(controls);

var leftInferiorWing = COLOR([1,0.85,0])(MAP(wing)(domain2));

//tappo inferiore

var pV = [[0,0,0.2],[9.6,0,2],[9.6,0,-2],[5,0,1],[0,0,0.2],[0,0,0.2],[0,0,0.2]];
var pV2 =[[0,0,0.2],[0,0,0.2],[0,0,0.2],[5,0,1],[9.6,0,-2],[9.6,0,2],[0,0,0.2]];
var pO = [[0,0,0.2],[-3,5,0.2],[-3,5,0.2],[-3,4,0.2],[-3,4,0.2],[5,0,0.2]];

var cV = BEZIER(S0)(pV);
var cV2 = BEZIER(S0)(pV2);
var cO = BEZIER(S0)(pO);

var t = BEZIER(S1)([cV,cV,cO,cV2,cV2]);

//DRAW(MAP(cV)(domain1));

var tappoInf = COLOR([1,0.85,0])(MAP(t)(domain2));

tappoInf = T([1])([19])(tappoInf);

//tappo superiore
var tappoSup = T([0,2])([2.5,7.5])(tappoInf);




//var rightWing = S([0])([-1])(leftWing);

//var wings = STRUCT([leftWing,rightWing]);

var getCylinder = function(r,h,n,m,color) {
  var dominioCylinder = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingCylinder = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [r * COS(u), r * SIN(u), v];
  };
  var mappedCylinder = MAP(mappingCylinder)(dominioCylinder);

  var hBase = TRANSLATE([0,1,2])([0,0,h])(DISK(r)(n));
  var bBase = DISK(r)(n);


  

  var cilindro = STRUCT([mappedCylinder,bBase,hBase]);
  
  return mappedCylinder;
};


var sostegno = getCylinder(0.2,7.7,50,50,[0,0,0]);
sostegno = ROTATE([0,2])(Math.PI/12)(sostegno);

var sostegno1 = T([0,1,2])([2,14,0.3])(sostegno);
var sostegno2 = T([0,1,2])([5,14,0.3])(sostegno);



var leftWing = STRUCT([leftInferiorWing,tappoInf,leftSuperiorWing,tappoSup,sostegno1,sostegno2]);

leftWing = COLOR([1,0.85,0])(leftWing);
leftWing = ROTATE([0,1])(-Math.PI/2)(leftWing);
leftWing = ROTATE([0,1])(Math.PI/24)(leftWing);
leftWing = T([0,1,2])([1,15,4])(leftWing);

DRAW(leftWing);

