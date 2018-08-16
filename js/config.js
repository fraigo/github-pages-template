var hostName=document.location.host;
var hostParts=hostName.split(".");
var myUser = "github";
if (hostParts[1]=="github" || hostParts[2]=="io"){
    myUser = hostParts[0];
}
var myRepos = 
{
    hostName : {
        image:"images/github.png.jpg"
    },
    
}
