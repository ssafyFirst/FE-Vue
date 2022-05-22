<template>
  <div>
    <nav class="d-flex justify-content-between">
      <div>Movie</div>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>    
        <div v-if="isLoggedIn">
          <router-link :to="{ name: 'profile' }">profile</router-link>
          <log-out></log-out>
        </div>
        <div v-else>
          <router-link to="/login">login</router-link>
        </div>
        <button @click="darkModeToggle">darkMode</button>
      </div>
    </nav>
    <router-view/>
    
  </div>
</template>

<script>
import LogOut from '@/components/LogOut.vue'
import { mapGetters } from 'vuex'

export default {
  name:'NavBar',
  components:{
    LogOut,
    
  },
  computed :{
    ...mapGetters(['isLoggedIn'])
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