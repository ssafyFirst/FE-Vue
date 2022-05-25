<template>
  <div id="app">
    <nav-bar></nav-bar>
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapActions} from 'vuex'


export default {
  name:'App',
  components:{
    NavBar,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
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



</style>
