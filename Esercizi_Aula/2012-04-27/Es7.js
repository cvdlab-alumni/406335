var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);


var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);

var curve = STRUCT([COLOR([1,0,0])(splineCardinal),COLOR([0,1,0])(splineCubic)]);


DRAW(curve);