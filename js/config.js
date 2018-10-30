var myUser;
if (window.config && config.user && config.user!= ""){
    myUser = config.user;
}

var hostName=document.location.host;
var hostParts=hostName.split(".");

if (!myUser && hostParts[1]=="github" || hostParts[2]=="io"){
    myUser = hostParts[0];
}

if (!myUser){
    myUser = "github";
}
var loc=document.location; 
if (loc.search.length>2){
    myUser = loc.search.replace("?","");
}

