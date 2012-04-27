var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW(splineCubic);