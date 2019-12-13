//javascript code

function demo()
{
    var oText="";
    var i;
    for (i = 0; i < 5; i++) {
    oText += "The number is " + i + "<br>";
    }
    
    document.getElementById("demo").innerHTML = oText;

}