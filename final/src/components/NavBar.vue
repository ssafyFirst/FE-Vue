<template>
  <div>
    <b-navbar v-if="isLoggedIn" toggleable="lg" type="dark" variant="light">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img class="w-50 h-50" src="@/assets/logo22.png" alt="">
        </router-link>
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav class="justify-content-end">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button class="mx-3" @click="darkModeToggle">DarkMode</b-button>
          <b-icon icon="sliders" font-scale="2" v-b-toggle.sidebar-backdrop></b-icon>



        <b-sidebar
          id="sidebar-backdrop"
          title="Profile"
          :backdrop-variant="variant"
          backdrop
          shadow  
          right="True"
        >
        <div v-if="isLoggedIn">
          <router-link :to="{ name: 'profile', params: { username } }">profile</router-link>
          <log-out></log-out>
        </div>
        <div v-else>
          <router-link  to="/login">login</router-link>
        </div>
        <b-nav-form class="">
          <b-form-input size="sm" class="mr-sm-2 " placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0  " type="submit">Search</b-button>
        </b-nav-form>
        <map-item></map-item>         
        </b-sidebar>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>



    <b-navbar v-else>
      <button @click="darkModeToggle">darkMode</button>
    </b-navbar>
  

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