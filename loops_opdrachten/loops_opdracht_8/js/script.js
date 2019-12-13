//javascript code
function demo()
{
    var i;
    var iText="";
    
    for (i=1; i <= 50; i++) 
    {
        if(i%25 == 0)
        {
            iText += "<b>This was almost a bullseye</b> " + i + "<br>";
        }
        else if(i%25 == 0)
        {
            iText += "<b>This was almost a bullseye</b> " + i + "<br>";
        }
        else
        {
            iText += i + "<br>";
        }
   
    }

        document.getElementById("demo").innerHTML = iText;
        
}