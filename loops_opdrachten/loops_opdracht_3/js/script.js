//javascript code

function demo()
{
    var i;
    var iText="";
    var o;
    var oText="";
    {
            for (i = 0; i < 21; i++) {
            iText += "This is number " + i + "<br>";
            
            for (o = 0; o < 41; o++) 
            oText += "This numbers are better " + o + "<br>";
            }
    }
    

        document.getElementById("demo").innerHTML = iText;
        document.getElementById("demo").innerHTML = oText;
}