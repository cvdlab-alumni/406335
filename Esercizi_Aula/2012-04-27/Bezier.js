var domain = INTERVALS(1)(32);
var controlpoints = [[0,0],[3,1],[1,2],[2,3],[3,2]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);