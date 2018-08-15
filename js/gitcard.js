
Vue.component("gitcard",{
    props:[
        "repo",
        "image"
    ],
    template:`
  <v-flex xs12 sm6 px-2 mt-2>
   
    <v-card>
      <v-card-media 
        v-if="repo.image"
        style="background-position: top center"
        :src="repo.image" height="120px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{repo.name}}</h3>
          <div>
            <i ><a :href="repo.html_url">{{repo.html_url}}</a></i>
            <div style="height:50px;overflow:hidden">
            {{repo.description}}
            </div>
            <div style="height:36px;overflow:hidden">
            <v-chip small outline="true" olor="orange" v-if="repo.license">{{repo.license.name}}</v-chip>
            <v-chip small v-if="repo.language">{{repo.language}}</v-chip>
            </div>
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="blue" @click="openPage(repo.html_url)">GitHub Repo</v-btn>
        <v-btn flat color="orange" v-if="repo.has_pages" @click="openPage(getPage(repo.name))" >Demo / Preview</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
    `,
    methods: {
      getPage: function(name){
        return "https://fraigo.github.io/"+name+"/";
      },
      openPage: function(name){
        window.open(name, "_blank");
      }
    }
})
