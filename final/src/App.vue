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
    ...mapActions(['fetchCurrentUser'])
  },
  created () {
    this.fetchCurrentUser()
  }

}
</script>




<style>
</style>
