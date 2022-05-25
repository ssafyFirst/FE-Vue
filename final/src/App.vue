<template>
  <nav-bar></nav-bar>
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
  }

}
</script>




<style>
</style>
