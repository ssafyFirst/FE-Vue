<template>
  <div>회원가입
    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="credentials.username">
      </div>
      <div>
        <label for="password1">password1</label>
        <input type="password" id="password1" v-model="credentials.password1">
      </div>
      <div>
        <label for="password2">password2</label>
        <input type="password" id="password2" v-model="credentials.password2">
      </div>
      <input type="file">
      <button>회원가입</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:'SignupView',
  data() {
    return{
      credentials:{
        username: '',
        password1: '',
        password2: '',
        image: ''
      }
    }
  },
  methods:{
    ...mapActions(['signup'])
  }

}
</script>

<style>

</style>