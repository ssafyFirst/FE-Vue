<template>
<div id="app">
  <nav-bar></nav-bar>
  
  <router-view/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// import LoginView from '@/views/LoginView.vue'
import { mapActions, mapGetters} from 'vuex'



export default {
  name:'App',
  components:{
    NavBar
  },
  computed:{
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'removeToken'])
  },
  created () {
    this.fetchCurrentUser()
  },
  beforeDestroy () {
    this.removeToken()
  },
  

}
</script>




<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
* { font-family: 나눔스퀘어, 'NanumSquare', sans-serif; }



</style>
