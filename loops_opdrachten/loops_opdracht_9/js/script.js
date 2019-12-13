//javascript code
function demo()
{
    var i;
    var iText="";
    
    for (i=1; i <= 5; i++) 
    {
        if(i%5 == 5)
        {
            iText += "<b>This is the end</b> " + i + "<br>";
        }

        else if(i%10 == 0)
        {
            iText += "<b>blah</b> " + i + "<br>";
        }

        else(i%10 == 0)
        {
            iText += "<b>This is the begin of the begin</b> " + i + "<br>";
        }
        
   
    }

        document.getElementById("demo").innerHTML = iText;
        
}