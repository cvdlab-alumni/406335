
var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[ 1, 0],[ 1,1]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);