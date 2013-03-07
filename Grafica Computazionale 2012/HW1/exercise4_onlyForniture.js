//LAMPIONE



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


var lampione = getLampione();

DRAW(lampione);