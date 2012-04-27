var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6,1],[-4,2,3],[-3,-1,-4],[-1,1,2],[1.5,1.5,0],[3,4,8],[5,5,3],[7,2,1],[6,-2,-1],[2,-3,2]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW(splineCardinal);