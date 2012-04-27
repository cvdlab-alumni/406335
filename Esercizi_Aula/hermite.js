
var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[3,1],[ 1, 2],[ 2,3],[3,2]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);