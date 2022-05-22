<template>
  <div>
    <button @click="logout" v-if="isLoggedIn">logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LogOut',
  data () {
    return {
      
    }
  },
  
  methods:{
    ...mapActions(['logout'])
  },
  computed:{
    ...mapGetters(['isLoggedIn'])
  },
  // created() {
  //   if (this.isLoggedIn) {
  //     this.logout()
  //   } else {
      
  //     this.$router.back()
  //   }
  // }

}
</script>

<style>

</style>