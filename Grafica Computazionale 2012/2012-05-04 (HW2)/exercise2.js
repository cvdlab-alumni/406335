var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);


//fusoliera dietro

var p0 = [[-1.5,0,0],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[0,0,5],[0,0,5],[0,0,5],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,0]];
//var p1 = [[-1.5,1,0.125],[-1.5,1,3.625],[-1.5,1,3.625],[-1.5,1,3.625],[-1.5,1,3.625],[0,1,4.875],[0,1,4.875],[0,1,4.875],[1.5,1,3.625],[1.5,1,3.625],[1.5,1,3.625],[1.5,1,3.625],[1.5,1,0.125]];
//var p2 = [[-1.5,2,0.25],[-1.5,2,3.5],[-1.5,2,3.5],[-1.5,2,3.5],[-1.5,2,3.5],[0,2,4.75],[0,2,4.75],[0,2,4.75],[1.5,2,3.5],[1.5,2,3.5],[1.5,2,3.5],[1.5,2,3.5],[1.5,2,0.25]];
//var p3 = [[-1.5,3,0.375],[-1.5,3,3.375],[-1.5,3,3.375],[-1.5,3,3.375],[-1.5,3,3.375],[0,3,4.625],[0,3,4.625],[0,3,4.625],[1.5,3,3.375],[1.5,3,3.375],[1.5,3,3.375],[1.5,3,3.375],[1.5,3,0.375]];
var p1 = [[-0.75,10,1.25],[-0.75,10,2.5],[-0.75,10,2.5],[-0.75,10,2.5],[-0.75,10,2.5],[0,10,3.75],[0,10,3.75],[0,10,3.75],[0.75,10,2.5],[0.75,10,2.5],[0.75,10,2.5],[0.75,10,2.5],[0.75,10,1.25]];
var p2 = [[-0.70,12.5,1.5625],[-0.70,12.5,2.1875],[-0.70,12.5,2.1875],[-0.70,12.5,2.1875],[-0.70,12.5,2.1875],[0,12.5,3.4375],[0,12.5,3.4375],[0,12.5,3.4375],[0.70,12.5,2.1875],[0.70,12.5,2.1875],[0.70,12.5,2.1875],[0.70,12.5,2.1875],[0.70,12.5,1.5625]];

p0 = p0.map(function (p) {return [p[0], p[1]+15, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+15, p[2]+4]});
p2 = p2.map(function (p) {return [p[0], p[1]+15, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);

var controls = [c0,c1,c2];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

//DRAW(curves);

var f = BEZIER(S1)(controls);


var fusolieraDietroSopra = MAP(f)(domain2);


var p0 = [[-1.5,0,0],[1.5,0,0]];
var p1 = [[-0.7,12.5,1.5625],[0.7,12.5,1.5625]];

p0 = p0.map(function (p) {return [p[0], p[1]+15, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+15, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var b = BEZIER(S1)(controls);

var fusolieraDietroBase = MAP(b)(domain2);

var fusolieraDietro = COLOR([1,0.85,0])(STRUCT([fusolieraDietroSopra,fusolieraDietroBase]));



DRAW(fusolieraDietro);




//fusoliera sedile dietro

var p0S = [[1.5,0,0],[1.5,0,3]];
var p0D = [[-1.5,0,0],[-1.5,0,3]];
var p1S = [[1.5,2.5,0],[1.5,2.5,3]];
var p1D = [[-1.5,2.5,0],[-1.5,2.5,3]];

p0S = p0S.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});
p0D = p0D.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});
p1S = p1S.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});
p1D = p1D.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});

var c0S = BEZIER(S0)(p0S);
var c0D = BEZIER(S0)(p0D);
var c1S = BEZIER(S0)(p1S);
var c1D = BEZIER(S0)(p1D);

var cS = [c0S,c1S];
var fS =BEZIER(S1)(cS);

var cD = [c0D,c1D];
var fD =BEZIER(S1)(cD);

var fusolieraSedileDietroS = MAP(fS)(domain2);
var fusolieraSedileDietroD = MAP(fD)(domain2);


var p0 = [[-1.5,0,0],[1.5,0,0]];
var p1 = [[-1.5,2.5,0],[1.5,2.5,0]];

p0 = p0.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+12.5, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var b = BEZIER(S1)(controls);

var fusolieraSedileDietroBase = MAP(b)(domain2);

var fusolieraSedileDietro = COLOR([1,0.85,0])(STRUCT([fusolieraSedileDietroS,fusolieraSedileDietroD,fusolieraSedileDietroBase]));

DRAW(fusolieraSedileDietro);


//fusolietra fra i sedili

var p0 = [[-1.5,0,0],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[0,0,5],[0,0,5],[0,0,5],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,0]];
var p1 = p0.map(function (p) {return [p[0], p[1]+2, p[2]]});
	
p0 = p0.map(function (p) {return [p[0], p[1]+10.5, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+10.5, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var fSed = BEZIER(S1)(controls);
var fusFraSedili = MAP(fSed)(domain2);

//base fusoliera fra sedili
var p0 = [[-1.5,0,0],[1.5,0,0]];
var p1 = [[-1.5,2.5,0],[1.5,2.5,0]];

p0 = p0.map(function (p) {return [p[0], p[1]+10.5, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+10.5, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var b = BEZIER(S1)(controls);

var fusolieraFraSediliBase = MAP(b)(domain2);

var fusolieraFraSedili = COLOR([1,0.85,0])(STRUCT([fusFraSedili,fusolieraFraSediliBase]));


DRAW(fusolieraFraSedili);

// fusoliera sedile davanti
var fusolieraSedileDavanti = T([1])([-4.5])(fusolieraSedileDietro);

DRAW(fusolieraSedileDavanti);

//fusoliera davanti al sedile

var fusolieraDavantiSedile = T([1])([-4.5])(fusolieraFraSedili);

DRAW(fusolieraDavantiSedile);


//fusolieraMuso 80 cm

var p0 = [[-0.7,0,0],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[0,0,4],[0,0,4],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,0]];
var p1 = [[-1.5,0,0],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[-1.5,0,3.75],[0,0,5],[0,0,5],[0,0,5],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,3.75],[1.5,0,0]];
p1 = p1.map(function (p) {return [p[0], p[1]+4, p[2]]});
	
p0 = p0.map(function (p) {return [p[0], p[1]+2, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+2, p[2]+4]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var FM = BEZIER(S1)(controls);

var fusMuso = MAP(FM)(domain2);

//base fusoliera muso
var p0 = [[-0.7,0,0],[0.7,0,0]];
var p1 = [[-1.5,4,0],[1.5,4,0]];

p0 = p0.map(function (p) {return [p[0], p[1]+2, p[2]+4]});
p1 = p1.map(function (p) {return [p[0], p[1]+2, p[2]+4]});


var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var controls = [c0,c1];

var b = BEZIER(S1)(controls);

var fusolieraMusoBase = MAP(b)(domain2);

var fusolieraMuso = COLOR([1,0.85,0])(STRUCT([fusMuso,fusolieraMusoBase]));


DRAW(fusolieraMuso);

//MUSO

var pOr = [[-0.7,0,3],[0,-8,3],[0.7,0,3]];
var pOr2 = [[-0.7,0,2],[0.7,0,2]];
var pM = [[-0.7,0,0],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[-0.7,0,3],[0,0,4],[0,0,4],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,3],[0.7,0,0]];
var pB = [[-0.7,0,0],[0.7,0,0]];

var cOr = BEZIER(S0)(pOr);
var cOr2 = BEZIER(S0)(pOr2);
var cM = BEZIER(S0)(pM);
var cB = BEZIER(S0)(pB);

var musoControls = [cB,cOr2,cOr,cM];

var M = BEZIER(S1)(musoControls);
var mappedMuso = MAP(M)(domain2);
var muso = COLOR([1,0.85,0])(mappedMuso);
var muso = T([1,2])([2,4])(muso);
DRAW(muso);



//culo

var pOr = [[-0.7,0,3],[0,10,3],[0.7,0,3]];
var pOr2 = [[-0.7,0,2],[0.7,0,2]];
var pF = [[-0.70,0,1.5625],[-0.70,0,2.1875],[-0.70,0,2.1875],[-0.70,0,2.1875],[-0.70,0,2.1875],[0,0,3.4375],[0,0,3.4375],[0,0,3.4375],[0.70,0,2.1875],[0.70,0,2.1875],[0.70,0,2.1875],[0.70,0,2.1875],[0.70,0,1.5625]];
var pB = [[-0.7,0,1.5625],[0.7,0,1.5625]];




pF = pF.map(function (p) {return [p[0], p[1]+27.5, p[2]+4]});
pB = pB.map(function (p) {return [p[0], p[1]+27.5, p[2]+4]});
pOr = pOr.map(function (p) {return [p[0], p[1]+27.5, p[2]+4]});
pOr2 = pOr2.map(function (p) {return [p[0], p[1]+27.5, p[2]+4]});

var cOr = BEZIER(S0)(pOr);
var cOr2 = BEZIER(S0)(pOr2);
var cF = BEZIER(S0)(pF);
var cB = BEZIER(S0)(pB);

var culoControls = [cB,cOr,cF];

var M = BEZIER(S1)(culoControls);
var mappedCulo = MAP(M)(domain2);
var culo = COLOR([1,0.85,0])(mappedCulo);
//var culo = T([1,2])([2,4])(muso);
DRAW(culo);






//elica

var p0 = [[0,0,0],[0.5,0,2],[0,0,4],[-0.5,0,2],[0,0,0]];
var p02 = [[0,0,0],[-0.5,0,2],[0,0,4],[0.5,0,2],[0,0,0]];
var pOr = [[-0.5,0,2],[0,-0.3,2],[-0.5,0,2]];
var pOr2 = [[-0.5,0,2],[0,0.3,2],[-0.5,0,2]];

var c0 = BEZIER(S0)(p0);
var c02 = BEZIER(S0)(p02);
var cOr = BEZIER(S0)(pOr);
var cOr2 = BEZIER(S0)(pOr2);

var helicControls1 = [c0,c0,c0,c0,c0,c0,c0,c0,cOr,c02,c02,c02,c02,c02,c02,c02,c02];
var helicControls2 = [c0,c0,c0,c0,c0,c0,c0,c0,cOr2,c02,c02,c02,c02,c02,c02,c02,c02];

var h1 = BEZIER(S1)(helicControls1);
var h2 = BEZIER(S1)(helicControls2);

var mH1 = MAP(h1)(domain2);
var mH2 = MAP(h2)(domain2);

var MHSup = STRUCT([mH1,mH2]);


p0 = p0.map(function (p) {return [p[0], p[1], p[2]*(-1)]});
p02 = p02.map(function (p) {return [p[0], p[1], p[2]*(-1)]});
pOr = pOr.map(function (p) {return [p[0], p[1], p[2]*(-1)]});
pOr2 = pOr2.map(function (p) {return [p[0], p[1], p[2]*(-1)]});
	
var c0 = BEZIER(S0)(p0);
var c02 = BEZIER(S0)(p02);
var cOr = BEZIER(S0)(pOr);
var cOr2 = BEZIER(S0)(pOr2);

var helicControls1 = [c0,c0,c0,c0,c0,c0,c0,c0,cOr,c02,c02,c02,c02,c02,c02,c02,c02];
var helicControls2 = [c0,c0,c0,c0,c0,c0,c0,c0,cOr2,c02,c02,c02,c02,c02,c02,c02,c02];

var h1 = BEZIER(S1)(helicControls1);
var h2 = BEZIER(S1)(helicControls2);

var mH1 = MAP(h1)(domain2);
var mH2 = MAP(h2)(domain2);

var MHInf = STRUCT([mH1,mH2]);

MHInf = R([0,1])(Math.PI/5)(MHInf);
MHSup = R([0,1])(-Math.PI/5)(MHSup);


var helic = T([1,2])([0.2,6.8])(COLOR([0,0,0])(STRUCT([MHSup,MHInf])));

DRAW(helic);
