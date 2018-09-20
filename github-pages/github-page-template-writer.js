const path = require('path');
const templateWriter = require('template-writer');



module.exports = function(githubUser,githubName){

  githubName = githubName ? githubName : githubUser.charAt(0).toUpperCase() + githubUser.slice(1);

  var data={
    "user": githubUser,
    "Name": githubName,
    "date": (new Date()).toISOString
  }

  var config = {
    baseDir: path.resolve(__dirname, "../"),
    templateDir: 'github-pages/templates',
    targetDir: '.'
  }
  
  templateWriter("index.html",data,config);
  templateWriter("sitemap.xml",data,config);
  
}