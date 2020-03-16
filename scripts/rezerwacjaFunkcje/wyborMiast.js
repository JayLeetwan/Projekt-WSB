function chooseCity()
{
    var a=document.getElementById("startCity").value;
    if(a==="Poznań")
    {
        var arr=["Warszawa","Nowy Jork", "Londyn", "Hong Kong"];
    }
    else if(a==="Warszawa")
    {
        var arr=["Poznań","Nowy Jork", "Londyn", "Hong Kong"];
    }
    else if(a==="Nowy Jork")
    {
        var arr=["Poznań","Warszawa", "Londyn", "Hong Kong"];
    }
    else if(a==="Londyn")
    {
        var arr=["Poznań","Warszawa", "Nowy Jork", "Hong Kong"];
    }
    else if(a==="Hong Kong")
    {
        var arr=["Poznań","Warszawa", "Nowy Jork", "Londyn"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("destinationCity").innerHTML=string;
}