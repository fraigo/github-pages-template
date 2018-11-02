const path = require('path');
const templateWriter = require('template-writer');



module.exports = function(githubUser,githubName){

  githubName = githubName ? githubName : githubUser.charAt(0).toUpperCase() + githubUser.slice(1);

  var data={
    "user": githubUser,
    "Name": githubName,
    "date": (new Date()).toISOString()
  }

  var templateOptions = {
    templateDir:'./templates',
    targetDir:'../', //parent folder
    baseDir:__dirname
  }

  var index = {
    name: 'index.html',
    target:'index.html',
    vars: data,
    replacements: {}
  }

  templateWriter(
    index,
    templateOptions
  );

  var sitemap = {
    name: 'sitemap.xml',
    target:'sitemap.xml',
    vars: data,
    replacements: {}
  }

  templateWriter(
    sitemap,
    templateOptions
  );
  
}