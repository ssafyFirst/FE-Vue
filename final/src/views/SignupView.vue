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
      <input type="file" ref="file" @change.prevent="selectFile">
       <!-- <input type="number" v-model="credentials.like_actors">
       <input type="number" v-model="credentials.like_genres"> -->

      <button>회원가입</button>
    </form>
  </div>
</template>

<script>
// import http from '../http-common'
import { mapActions } from 'vuex'

export default {
  name:'SignupView',
  data() {
    return{
      credentials:{
        username: '',
        password1: '',
        password2: '',
        image: undefined
      }
    }
  },
  methods:{
    ...mapActions(['signup']),
    selectFile (event) {
      const formData = new FormData()
      formData.append('files', event.target.files[0])
      console.log(formData)
      this.credentials.image = formData
      console.log(this.credentials.image)
    }
  }

}
</script>

<style>

</style>