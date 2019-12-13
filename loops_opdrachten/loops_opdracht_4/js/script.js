//javascript code

function demo()
{
    var i;
    var iText="";
    var o;
    var oText="";
    {
            for (o = 0; o < 1000; o+=10) {
            oText += "This numbers are better " + o + "<br>";
                console.log(o)
            }
    }
    

        document.getElementById("demo").innerHTML = iText;
        document.getElementById("demo").innerHTML = oText;
}