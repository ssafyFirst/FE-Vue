<template>
  <div>
    <h1> 받아올 데이터 로그인한 유저의 데이터들</h1>



  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name:'ProfileView',
  computed : {
    ...mapGetters(['profile'])
  },
  methods : {
    ...mapActions(['fetchProfile'])
  },
  created () {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  }

}
</script>

<style>

</style>