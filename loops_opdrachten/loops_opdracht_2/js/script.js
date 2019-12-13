//javascript code

function demo()
{
    var i;
    var oText="";
    for (i = 0; i < 21; i++) {
    oText += "This is number " + i + "<br>";
    }
    

        document.getElementById("demo").innerHTML = oText;
}