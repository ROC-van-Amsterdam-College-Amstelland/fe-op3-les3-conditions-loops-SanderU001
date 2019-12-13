//javascript code

function Submit()
{
    var i;
    var o;
    var iText="";
    var oText= new Array;
    
    for (i = 0; i < 101; i+=1) {
    iText += "This is number " + i + "<br>";
    }
    for (o = 1; o < 21; o+=2) {
        oText += o;
        }
    console.log(oText)
    
    var text = "";
    var i;
    for (i = 0; i < 11; i++) {
    if (i === 11) { break; }
    text += "The number is " + i + "<br>";
    }

        document.getElementById("Submit").innerHTML = text;
        document.getElementById("Submit").innerHTML = iText;
        
}