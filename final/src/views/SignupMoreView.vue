<template>
  <div>signup2
    <form @submit.prevent="signup2(credentials)">
      <input type="text" v-model="credentials.like_actors">
      <input type="text" v-model="credentials.like_genres">
      <button></button>
    </form>


  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:'SignupMoreView',
  data () {
    return {
      credentials:{
        like_actors : NaN,
        like_genres : NaN,
        username : this.$route.params.username
      },
    }
  },
  methods:{
    ...mapActions(['signup2'])
  }

}
</script>

<style>

</style>