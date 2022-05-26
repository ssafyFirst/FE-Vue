<template>
  <div>
    <b-button @click="logout" v-if="isLoggedIn" variant="danger" class="fixed-bottom">logout</b-button>
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