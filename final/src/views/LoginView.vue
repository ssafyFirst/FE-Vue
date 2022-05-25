<template>
  <div id="appMountPoint">
    <div class="d-flex justify-content-center align-items-center" style="width: 100vw;">
      <section class="login-box">
        <h2 class="text-white">Sign In</h2>
        <form class="mt-4">
          <div class="mb-3 bg-white rounded px-2" >
            <label for="exampleInputEmail1" class="form-label small-text">Email or Phone Number</label>
            <input type="email" class="form-control border-0 p-0" id="exampleInputEmail1" aria-describedby="emailHelp">
            
          </div>
          <div class="mb-3 bg-white rounded px-2">
            <label for="exampleInputPassword1" class="form-label small-text">Password</label>
            <input type="password" class="form-control border-0 p-0" id="exampleInputPassword1">
          </div>
          <a href="./landing.html" type="submit" class="btn btn-danger mt-3" style="width: 100%;">Sign In</a>
          <div class="mb-3 mt-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label text-white small-text" for="exampleCheck1">Remember Me</label>
          </div>
          
          <div class="mt-3 d-flex">
            <!-- <img width="20px" src="./images/fb.png" alt=""> -->
            <p class="m-0 small-text text-white mx-2">Login with Facebook</p>
          </div>
          <div class="mt-3 ">
            <!-- <img width="20px" src="./images/fb.png" alt=""> -->
            <p class="m-0  text-white"> <span style="color: rgba(212, 212, 212, 0.75);">New to Netflix?</span>  Sign up now.</p>
            <p class="m-0 small-text text-white  mt-2"> <span style="color: rgba(212, 212, 212, 0.75);">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#"> Learn more.</a> </span> </p>
          </div>
        </form>
      </section>
    </div>
  </div>
  <!-- <div>Login
    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="credentials.username">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="credentials.password">
        <button >로그인</button>
        <router-link to="/signup">회원가입</router-link>
        
      </div>
    </form>
  </div> -->
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

<style scoped>
#appMountPoint {
  height: auto;
}
</style>