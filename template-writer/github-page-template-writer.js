const path = require('path');
const templateWriter = require('template-writer');

module.exports = function(githubUser,githubName){

  githubName = githubName ? githubName : githubUser.charAt(0).toUpperCase() + githubUser.slice(1);

  var data={
    "user": githubUser,
    "Name": githubName,
    "date": (new Date()).toISOString
  }
  
  templateWriter("index.html",data);
  templateWriter("sitemap.xml",data);
  
}