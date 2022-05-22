<template>
  <div>회원가입
    <form @submit.prevent="signup(formData)">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="credentials.username" >
      </div>
      <div>
        <label for="password1">password1</label>
        <input type="password" id="password1" v-model="credentials.password1" >
      </div>
      <div>
        <label for="password2">password2</label>
        <input type="password" id="password2" v-model="credentials.password2" >
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
// import { mapActions } from 'vuex'

export default {
  name:'SignupView',
  data() {
    const formData = new FormData()
    return{
      credentials:{
        username: '',
        password1: '',
        password2: '',
      },
      formData : formData
    }
  },
  methods:{
    signup () {
      this.formData.append("username", this.credentials.username)
      this.formData.append("password1", this.credentials.password1)
      this.formData.append("password2", this.credentials.password2)
      this.$store.dispatch('signup', this.formData)
      console.log(this.formData)
    },
    selectFile (event) {
      console.log(event.target.files[0])
      this.formData.append('files', event.target.files[0])       
    }
  }

}
</script>

<style>

</style>