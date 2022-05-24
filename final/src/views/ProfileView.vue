<template>
  <div>
    
    <h2>{{ profile.username }}</h2>
    <img :src=" url + profile.profile_img " alt="">
    <h3>{{ profile.like_movies[0].title }}</h3>
    

    <router-link :to="{ name: 'recommend', params:  profile.username }">추천</router-link>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name:'ProfileView',
  data () {
    return {
      url : "http://127.0.0.1:8000"
    }
  },
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