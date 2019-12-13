//javascript code

function demo()
{
    var i;
    var iText="";
    
    for (i=1; i <= 100; i++) 
    {
        if(i%3 == 0)
        {
            iText += "<b>VET " + i + "</b><br>";
        }
        else if(i%5 == 0)
        {
            iText += "<b>COOL " + i + "</b><br>";
        }
        else
        {
            iText += i + "<br>";
        }
   
    }

        document.getElementById("demo").innerHTML = iText;
        
}