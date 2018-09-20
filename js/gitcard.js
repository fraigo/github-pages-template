/**
 * gitcard HTML component
 * 
 * Shows info about a Git repo using the JSON properties (repo)
 * Also, it can show an image URLabout the project (image)
 */
Vue.component("gitcard",{
    props:[
        "repo",
        "textonly"
    ],
    template:`
  <v-flex xs12 sm6 px-2 mt-2>
   
    <v-card>
      <v-card-media 
        v-if="repo.image && !textonly"
        style="background-position: top center"
        :src="repo.image" height="120px">
      </v-card-media>
      <v-card-title primary-title>
        <v-layout column >
          <h3 class="headline mb-0" style="white-space:nowrap;overflow:hidden">{{repo.name}}</h3>
          <div>
            <div style="height:36px;line-height:18px;overflow:hidden">
              <i ><a target="_blank" :href="repo.html_url">{{repo.html_url}}</a></i>
            </div>
            <div style="height:54px;line-height:18px">
            {{repo.description}}
            </div>
            <div style="height:36px;overflow:hidden">
            <v-chip small outline="true" olor="orange" v-if="repo.license">{{repo.license.name}}</v-chip>
            <v-chip small v-if="repo.language">{{repo.language}}</v-chip>
            </div>
          </div>
        </v-layout>
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
