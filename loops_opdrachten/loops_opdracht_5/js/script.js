//javascript code

function demo()
{
    var i;
    var o;
    var iText="";
    var oText= new Array;
    
    for (i = 0; i < 21; i+=2) {
    iText += "This is number " + i + "<br>";
    }
    for (o = 1; o < 21; o+=2) {
        oText += o;
        }
    console.log(oText)
    
    

        document.getElementById("demo").innerHTML = iText;
        
}