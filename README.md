# github-pages-template
Template for a Github Pages web site using GitHub API

## Usage

* **Fork** this project in your Github account
  * https://github.com/fraigo/github-pages-template/fork
* **Activate Github pages** in the Github repository settings
  * Using your USERNAME
  * Go to https://github.com/USERNAME/github-pages-template/settings
  * Go to the section "**Github Pages**"
    * Select source "master branch"
    * Press "Save" button
* **Rename** your project to your *GitHub Pages URL*
  * Using your USERNAME
  * Go to https://github.com/USERNAME/github-pages-template/settings
  * Change `github-pages-template` to `USERNAME.github.io` and save
* Wait for one minute and point your browser to https://USERNAME.github.io/

**You're done!!**
Now you have an automatically generated Github Page 

## Configuration

You can add some specific configuration in the file `./config.js` 

```javascript
module.exports = {
  user: "",
  name: ""
}
```

### Featured repositories

You can add some featured repositories following this steps:

* Edit the file `./featured.js`, adding a github project name, and uploading a screenshot to the `images/` folder.

```
'my-repository-name' : {
    image:"images/repository-screenshot.png"
},
```

In this example, two projects are added to the "Featured" section

```javascript
var myRepos = 
{
    'my-repo1' : {
        image:"images/image1.png"
    },
    'my-repo2' : {
        image:"images/image2.png"
    },
    
}
```


If you want to use this page template outside the github.io domain, you can change this line in `js/config.js` to select the default 'github' user to your user name or any other:

```javascript
if (!myUser){
    myUser = "github";
}  
```

### Web preview

https://fraigo.github.io/github-pages-template/


### Test this site with your user name

https://fraigo.github.io/github-pages-template/?username


Examples:

* https://fraigo.github.io/github-pages-template/?github

* https://fraigo.github.io/github-pages-template/?google

* https://fraigo.github.io/github-pages-template/?microsoft

* https://fraigo.github.io/github-pages-template/?angular


## Contributing

Feel free to contribute to this project submitting bugfixes and new features.






