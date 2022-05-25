<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div>Movie</div>
      <div>
        <router-link to="/">Home</router-link>
        <div v-if="isLoggedIn">
          <router-link :to="{ name: 'profile', params: { username } }">profile</router-link>
          <log-out></log-out>
        </div>
        <div v-else>
          <router-link to="/login">login</router-link>
        </div>
        <button @click="darkModeToggle">darkMode</button>
      </div>
      <b-icon icon="sliders" font-scale="3" v-b-toggle.sidebar-backdrop></b-icon>

      <b-sidebar
        id="sidebar-backdrop"
        title="사이드바 입니다"
        :backdrop-variant="variant"
        backdrop
        shadow
        right="True"
      >
      <map-item></map-item>
      </b-sidebar>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import LogOut from '@/components/LogOut.vue'
import MapItem from '@/components/MapItem'
import { mapGetters } from 'vuex'

export default {
  name:'NavBar',
  components:{
    LogOut,
    MapItem,
    
  },
  data() {
    return {
      variant: 'dark',
    }
  },
  computed :{
    ...mapGetters(['isLoggedIn', 'currentUser']),
    username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
  },
  mounted() {
    


    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.add("lightmode");
    }
  },
  methods:{
    darkModeToggle () {
      if (window) {
        console.log(window)

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          if(document.documentElement.classList.contains('darkmode')) {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
          } else {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
          }
        } else {
          if(document.documentElement.classList.contains('lightmode')) {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
          } else {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
          }
        }
        
      }
    }
  }
  
}
</script>

<style>
:root {
    background-color: #f7f7f7;
    /*variables*/
    --title-color: #42b983;
    --content-color: #777;
}

/* IE 미지원 */
@media (prefers-color-scheme: dark) {
    :root {
        background-color: #181c40;
        /*variables*/
        --title-color: #fafafa;
        --content-color: #6a6e9e;
    }
}

:root.lightmode {
    background-color: #f7f7f7;
    /*variables*/
    --title-color: #42b983;
    --content-color: #777;
}

:root.darkmode {
    background-color: #181c40;
    /*variables*/
    --title-color: #fafafa;
    --content-color: #6a6e9e;
}

.hello .hello__title {
    color: var(--title-color);
    font-weight: 600;
    transition: color 0.15s
}

.hello .hello__content {
    color: var(--content-color);
}

</style>