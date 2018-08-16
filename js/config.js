var hostName=document.location.host;
var hostParts=hostName.split(".");
var myUser;
if (hostParts[1]=="github" || hostParts[2]=="io"){
    myUser = hostParts[0];
}
if (!myUser){
    myUser = "github";
}
var loc=document.location; 
if (loc.search.length>2){
    alert("user");
    myUser = loc.search.replace("?","");
}
var myRepos = 
{
    'my-repo' : {
        image:"images/github.png.jpg"
    },
    
}
