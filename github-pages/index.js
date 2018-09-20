
  var config=require('../config.js');
  var githubPageWriter = require('./github-page-template-writer');
  githubPageWriter(config.user, config.name);
  
