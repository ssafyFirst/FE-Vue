<template>
<div class="login-wrapper hybrid-login-wrapper"
:style="{ 'background-image': 'url(' + url + path + ')',
  'background-size': 'cover', 'width': '100vw', 'height': '100vh'}"
>
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
          <account-error-list v-if="authError"></account-error-list>
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
          <b-button @click="login(credentials)" class="btn-login btn-block mt-2" variant="primary">LOGIN</b-button>
          <router-link
            :to="{ name: 'signup' }"
            class="text-decoration-none text-white float-end">
            <br>
            <h6 class="d-flex justify-content-center">아직 회원이 아닌가요?</h6>
            <b-button class="btn-signup w-30" style="display: block; margin: 0 auto">Signup</b-button>
          </router-link>      
        </div>  
      </div>
    </div>
  </b-container>
</div>
</template>

<script>
import * as _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import AccountErrorList from '@/components/AccountErrorList.vue'

export default {
  name: 'LoginView',
  components: {
    AccountErrorList,
  },
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
  computed: {
    ...mapGetters(['authError'])
  },
  created () {
    axios({
      url:'https://api.themoviedb.org/3/movie/now_playing/',
      params:{
        api_key: process.env.VUE_APP_TMDB_KEY,
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