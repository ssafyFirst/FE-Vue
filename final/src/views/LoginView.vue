<template>
<div class="login-wrapper hybrid-login-wrapper">
  <div class="login-wrapper-background">
    <img class="w-100 h-100" :src="url+path" alt="">
  </div>
  <b-container style="height: 100vh">
    <div class="position-absolute top-0  translate-middle-x pt-5">
      <img src="@/assets/logo22.png" alt="Logo" class="pt-5" />
    </div>

    <div
      class="text-white h-100 d-flex align-items-center justify-content-center"
    >
      <div style="background-color: #26282b" class="rounded p-5 w-50">
        <div class="text-start">
          <h1 class="mb-4">로그인</h1>
        </div>
        <div class="mb-3 text-start">
          <label for="username" class="form-label">아이디</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="credentials.username"
          />
        </div>
        <div class="mb-3 text-start">
          <label for="password" class="form-label">비밀번호</label>
          <input
            type="password"
            @keyup.enter="login(credentials)"
            id="password"
            v-model="credentials.password"
            class="form-control"
          />
        </div>
        <div class="d-grid gap-2">
          <b-button @click="login(credentials)" class="btn-login btn-block">LOGIN</b-button>
          <router-link
            :to="{ name: 'signup' }"
            class="text-decoration-none text-white float-end">
            <b-button class="btn-signup">Signup</b-button>
          </router-link>      
        </div>  
      </div>
    </div>
  </b-container>
</div>
</template>

<script>
import * as _ from 'lodash'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'LoginView',
  data () {
    return {
      credentials : {
        username: '',
        password: ''
      },
      url : 'https://image.tmdb.org/t/p/w500/',
      path : ''
    }
  },
  methods: {
    ...mapActions(['login'])
  },
  created () {
    axios({
      url:'https://api.themoviedb.org/3/movie/now_playing/',
      params:{
        api_key:'7f292cc09a9aff763e3e54a81c1ec05a',
        language:'ko'
      },
      method: 'get'
    })
    .then(res => {
      let page = _.random(1,20)
      this.path = res.data.results[page].backdrop_path
      }
    )
    .catch(err => console.error(err))
  }

}
</script>

<style scoped>
#appMountPoint {
  height: auto;
}
</style>