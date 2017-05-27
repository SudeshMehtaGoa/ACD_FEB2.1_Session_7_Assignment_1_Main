/*
   Calculating are of circle
*/
function areaOfCircle() {
   
    /* assumed values will be always numeric, validation is not done */
    var radius = document.getElementById("txtRadius").value;
    console.log("Radius :" + radius);

    /* Call function and pass radius as a parameter */
    var area = calculateAreaOfCircle(radius);

    document.getElementById("lblArea").innerText = "Area of circle is " + area;
    console.log("Area of circle is :" + area);

}
function calculateAreaOfCircle(radius)
{
        var constPI = 3.1415926535;
        var calculateArea = constPI * radius * radius;
        return(calculateArea);
}