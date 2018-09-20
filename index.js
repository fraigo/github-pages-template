
  var config=require('./config.js');
  var githubPageWriter = require('./template-writer/github-page-template-writer');
  githubPageWriter(config.user, config.name);
  
