<template>
  <b-container style="height: 100vh">
    <div class="w-50 mx-auto h-100 ">
      <h1>signup</h1>
      <div class="p-5">
        <account-error-list v-if="authError"></account-error-list>
        <b-form @submit.prevent="signup(formData)" @reset="onReset" >
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
            description="8자 이상 입력하세요~"
          >
            <b-form-input
              id="input-1"
              v-model="credentials.username"
              type="text"
              placeholder="Enter username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="my-1" id="input-group-2" label="password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="credentials.password1"
              placeholder="Enter password"
              type="password"
              description="8자 이상 입력하세요~"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group  class="my-1" id="input-group-3" label="password:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="credentials.password2"
              placeholder="Enter password"
              type="password"
              description="8자 이상 입력하세요~"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-file
          class="mt-3"
          @change.prevent="selectFile"
          :state="Boolean(file1)"
          accept=".jpg, .png, .gif"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here...">
          </b-form-file>
        <!-- <input type="file" ref="file" @change.prevent="selectFile"> -->

          <b-form-group label="좋아하는 장르를 고르세요" id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="mygenres"
              id="checkboxes-4"
              :options="genres"
              value-field="id"
              text-field="name"
              :aria-describedby="ariaDescribedby"
              size="lg"
              plain
            >
            <b-form-invalid-feedback :state="state">Please select three</b-form-invalid-feedback>
            <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>  
            </b-form-checkbox-group>
          </b-form-group>

          <router-link
          :to="{ name: 'login' }"
          class="text-decoration-none text-white float-end">
            <b-button class="btn-login">Login</b-button>
          </router-link>   
          <b-button class="m-1" type="reset" variant="danger">Reset</b-button>
          <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    
    </div>
  </b-container>
</template>

<script>
// import http from '../http-common'
// import { mapActions } from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
// import GenreListItem from '@/components/GenreListItem.vue'
import AccountErrorList from '@/components/AccountErrorList.vue'
import { mapGetters } from 'vuex'

export default {
  name:'SignupView',
  components:{
      AccountErrorList,
  },
  data() {
    const formData = new FormData()
    return{
      credentials:{
        username: '',
        password1: '',
        password2: '',
        
      },
      formData : formData,
      genres : [],
      mygenres : [],
      options : []
    }
  },
  computed:{
    ...mapGetters(['authError']),
    state() {
      return this.mygenres.length === 3
    }
  },
  methods:{
    getGenre (genre) {
      this.mygenres.push(genre.id)
    },
    onReset () {
      this.credentials.username = '',
      this.credentials.password1 = '',
      this.credentials.password2 = '',
      this.mygenres = []
    },
    signup () {
      this.formData.append("username", this.credentials.username)
      this.formData.append("password1", this.credentials.password1)
      this.formData.append("password2", this.credentials.password2)
      this.formData.append("like_genres", this.mygenres)
      console.log(this.mygenres)
      this.$store.dispatch('signup', this.formData)
      
    },
    selectFile (event) {
      console.log(event.target.files[0])
      this.formData.append('profile_img', event.target.files[0])       
    }
  },
  created () {
    axios({
        url:drf.movies.genres(),
        method:'get',
        
      })
      .then( res => {
        this.genres = res.data
        
      })
    
  }
  

}
</script>

<style>

</style>