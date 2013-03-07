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


var getCono = function(r,h,n,m,color) {
  r = r || 2;
  h = h || 5;
  n = n || 50;
  m = m || 50;
  color = color || [1,0,0];
  var dominioCono = DOMAIN([[0,2*PI],[0,(h-(h/4))]])([n,m]);
  var mappingCono = function(p) {
    var u = p[0];
    var v = p[1]; 
    return [r * COS(u) * ((h-v)/h), r * SIN(u) * ((h-v)/h), v];
  };
  var mappedCono = MAP(mappingCono)(dominioCono);
  return mappedCono;
};



var getLampione = function(){
var base = getCono(0.2,0.2,50,50,[1,0,0]);
var palo = getCylinder(0.05,2.5,50,50,[1,0,0]);
var lampada = T([2])([2.45])(getCono(0.2,0.4,50,50,[1,0,0]));

COLOR([0.8627,0.7098,0.1686])(lampada);
COLOR([0.1254,0.1019,0.0941])(base);
COLOR([0.388,0.2,0.1647])(palo);

var lampione = STRUCT([base,palo,lampada]);

return lampione;
};


var floor = STRUCT([
  SIMPLEX_GRID([[7],[0.85],[1]]), //striscia in basso piccola 39
  T([0])([7])(SIMPLEX_GRID([[32],[1],[1]])), //Striscia in basso lunga
  T([1])([0.85])(SIMPLEX_GRID([[0.85],[1.15],[1]])), //quadratino a sinistra
  T([0,1])([1,17])(SIMPLEX_GRID([[8],[5],[1]])), // pavimento stanzetta sinistra
  T([0,1])([1,10])(SIMPLEX_GRID([[38],[7],[1]])), //pavimento sopra piscina
	T([0,1])([21,1])(SIMPLEX_GRID([[15],[9],[1]])), //pavimento destra piscina
	T([0,1])([36,4])(SIMPLEX_GRID([[11],[6],[1]])), //pavimento parte stanza destra
	T([0,1])([39,10])(SIMPLEX_GRID([[8],[6],[1]])), //ultimo pezzo pavimento stanza a destra
	T([0,1])([47,4])(SIMPLEX_GRID([[5],[1],[1]])), //pezzi pavimento estrema destra
	T([0,1])([51,5])(SIMPLEX_GRID([[1],[1],[1]])),
]);

var fondoPiscina = T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.3]]));


//T([0,1])([(36+(i*(3/8))),1])(SIMPLEX_GRID([[(3/8)],[3],[(1-((i+1)/9))]])),

var getScalette = function(){
var scale = STRUCT([]);

	for(var i = 0; i<8; i++){
		scale.add(T([0,1])([(36+(i*(3/8))),1])(SIMPLEX_GRID([[(3/8)],[3],[(1-((i+1)/9))]])));
	}
return scale;
};

var scalette = getScalette();



var muroSinistra = STRUCT([
  T([0,1])([0.85,0.85])(SIMPLEX_GRID([[7],[0.15],[4]])), //pezzo di muro sotto la piscina
  //T([0,1])([0.85,1])(SIMPLEX_GRID([[0.15],[1.15],[4]])), // pezzo muro corto basso a sinistra
  T([0,1])([0.85,1])(SIMPLEX_GRID([[0.15],[21.15],[4]])), // pezzo muro lungo basso a sinistra
  T([0,1])([0.85,22])(SIMPLEX_GRID([[8.15],[0.15],[4]])) // 
]);


var muroPanchina = T([0,1,2])([6.5,15,1])(SIMPLEX_GRID([[20],[0.15],[3]]));
var muroDestroStanzettaSinistra = T([0,1])([9,17])(SIMPLEX_GRID([[0.15],[5.15],[4]]));
var vetrataStanzettaSinistra = T([0,1,2])([1,17,1])(SIMPLEX_GRID([[8],[0.1],[3]]));
var vetrataCentraleStanzettaSinistra = T([0,1,2])([4.95,17,1])(SIMPLEX_GRID([[0.1],[5],[3]]));
var doppiaVetrataStanzettaSinistra = STRUCT([
  T([0,1,2])([5.05,20.7,1])(SIMPLEX_GRID([[4],[0.1],[3]])), //orizzontale
  T([0,1,2])([7,20.8,1])(SIMPLEX_GRID([[0.1],[1.2],[3]])) //verticale
  
]);
var tettoStanzettaSinistra = T([0,1,2])([0.7,13.3,4])(SIMPLEX_GRID([[9],[9],[0.15]]));

var muroEsterno1 = T([0,1,2])([25.2,7.2,1])(SIMPLEX_GRID([[9],[0.15],[3]]));
var muroEsterno2 = T([0,1,2])([30,13.7,1])(SIMPLEX_GRID([[10],[0.15],[3]]));
var muroStanzaDestraOrizzontale = T([0,1,2])([37,11.2,1])(SIMPLEX_GRID([[5.3],[0.15],[3]]));
var muroStanzaDestraVerticale = T([0,1,2])([44.5,7,1])(SIMPLEX_GRID([[0.15],[7],[3]]));




var muroDestra = STRUCT([
  T([0,1,2])([41,4.85,1])(SIMPLEX_GRID([[6],[0.15],[3]])), //pezzo in basso interno
  T([0,1])([47,4.85])(SIMPLEX_GRID([[4],[0.15],[4]])), //pezzo in basso esterno
  T([0,1])([51,4.85])(SIMPLEX_GRID([[0.15],[11.30],[4]])), //verticale destro
  T([0,1])([39,16])(SIMPLEX_GRID([[12],[0.15],[4]])), //orizzontale in alto esterno
  T([0,1,2])([37.5,16,1])(SIMPLEX_GRID([[1.5],[0.15],[3]])), //orizzontale in alto interno
]);

var fondoPiscina2 = T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.3]]));

var tettoDestra = T([0,1,2])([24,4,4])(SIMPLEX_GRID([[23],[13],[0.15]]));



var muriEsterni = STRUCT([muroDestra,muroPanchina,muroDestroStanzettaSinistra,
muroSinistra,vetrataStanzettaSinistra,vetrataCentraleStanzettaSinistra,muroEsterno1,
muroEsterno2,muroStanzaDestraOrizzontale,muroStanzaDestraVerticale]);


var panchina = STRUCT([
  T([0,1,2])([6.8,14,1.4])(SIMPLEX_GRID([[15.2],[0.6],[0.15]])), //il sopra 15.2 0.6
  
  T([0,1,2])([7,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([8.8125,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([10.625,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([12.4375,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([14.25,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([16.0625,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([17.875,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([19.6875,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])), //sostegni
  T([0,1,2])([21.5,14.05,1])(SIMPLEX_GRID([[0.3],[0.5],[0.4]])) //sostegni
]);


var acquaPiscina1 = T([0,1,2])([1,1,0.3])(SIMPLEX_GRID([[20],[9],[0.6]])) //sostegni

var acquaPiscina2 = T([0,1,2])([47,5,0.3])(SIMPLEX_GRID([[4],[11],[0.6]]));

//COLOR([(28/155),(32/155),(42/155)])(muriEsterni);
COLOR([0.180,0.20645,0.2709])(muriEsterni);
COLOR([0.806,0.503,0.258])(floor);
COLOR([0.806,0.503,0.258])(fondoPiscina);
COLOR([0.806,0.503,0.258])(fondoPiscina2);
COLOR([0.806,0.503,0.258])(scalette);
COLOR([0.20,0.247,0.2549])(panchina);
COLOR([0,0.4549,0.4705])(acquaPiscina1);
COLOR([0,0.4549,0.4705])(acquaPiscina2);
COLOR([0.5627,0.5294,0.4274])(tettoStanzettaSinistra);
COLOR([0.5627,0.5294,0.4274])(tettoDestra);



var lampione1 = T([0,1,2])([21.4,1.4,1])(getLampione());
var lampione2 = T([0,1,2])([21.4,9.4,1])(getLampione());

var lampioni = STRUCT([lampione1,lampione2]);

var costruzione = STRUCT([floor,fondoPiscina,scalette,muriEsterni,doppiaVetrataStanzettaSinistra,
tettoStanzettaSinistra,fondoPiscina2,tettoDestra,
panchina,acquaPiscina1,acquaPiscina2,lampioni]);






DRAW(costruzione);

