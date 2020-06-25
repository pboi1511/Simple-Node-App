var rect = require ('./rectangle');

function solveRect(l,b)
{
    console.log("Solving for rectangle l = "+ l + "and b ="+ b);
    if( l <= 0 || b <=0  ){
        console.log("The dimensions are very less")
    }
    else {
            console.log("Perimeter of the rectangle is "+ rect.perimeter(l,b));
    }
}
solveRect(2,5)
solveRect(6,9)
solveRect(0,-1)