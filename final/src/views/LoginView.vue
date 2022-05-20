<template>
  <div>Login
    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="credentials.username">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="credentials.password">
        <button >로그인</button>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data () {
    return {
      credentials : {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }

}
</script>

<style>

</style>