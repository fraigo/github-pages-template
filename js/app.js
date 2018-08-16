var app=new Vue({ 
    el: '#app' ,
    data:{
      userData:[],
      featuredRepos:[],
      forkedRepos:[],
      personalRepos:[],
      languages:[],
      languageSection:{},
      languageFilter:null,
      hash:'personal',
      user:myUser
    },
    created: function(){
      document.getElementById("app").style.display='';
      this.$http.get('https://api.github.com/users/'+myUser).then(function(response){
            this.userData = response.data;
            document.title = this.userData.name + " - Github Page";
      });
      this.$http.get('https://api.github.com/users/'+myUser+'/repos?sort=updated&per_page=100').then(function(response) {
        var tmpRepos=response.data;
        this.personalRepos=[];
        var languageCount={};
        var languageSection={};
        for(var index in response.data){
          var repo=JSON.parse(JSON.stringify(response.data[index]));
          var lang=repo.language?repo.language:"Not detected";
          repo.language=lang;
          if (!languageCount[lang]){
            languageCount[lang]=0;
            languageSection[lang]={};
          }
          languageCount[lang]++;
          if (myRepos[repo.name]){
            repo.image=myRepos[repo.name].image;
            this.featuredRepos.push(repo);
            languageSection[lang]["featured"]=true;
          }
          if (!repo.fork){
            this.personalRepos.push(repo);
            languageSection[lang]["personal"]=true;
          }else{
            this.forkedRepos.push(repo);
            languageSection[lang]["forkedRepos"]=true;
          }
        }
        this.languages=Object.keys(languageCount);
        this.languages.sort(function(a,b){
          if (languageCount[a]>languageCount[b]){
            return -1;
          }
          if (languageCount[a]<languageCount[b]){
            return 1;
          }
          return 0;
        });
        this.languageSection=languageSection;
      })
    },
    methods: {
    }
  })
  window.onhashchange=function(ev){
    var hash=document.location.hash;
    console.log(hash);
  }