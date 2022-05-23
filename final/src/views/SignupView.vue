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
       <p>좋아하는 장르</p>
       
         <gerne-list-item
         v-for="gerne in gernes"
         :key="gerne.id"
         :gerne="gerne"
         @add-gerne="getGerne">
         </gerne-list-item>
       

      <button>회원가입</button>
    </form>
  </div>
</template>

<script>
// import http from '../http-common'
// import { mapActions } from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
import GerneListItem from '@/components/GerneListItem.vue'

export default {
  name:'SignupView',
  components:{
    GerneListItem,
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
      gernes : [],
      mygernes : []
    }
  },
  methods:{
    getGerne (gerne) {
      this.mygernes.push(gerne)
    },
    
    signup () {
      this.formData.append("username", this.credentials.username)
      this.formData.append("password1", this.credentials.password1)
      this.formData.append("password2", this.credentials.password2)
      this.$store.dispatch('signup', this.formData)
      
    },
    selectFile (event) {
      
      this.formData.append('profile_img', event.target.files[0])       
    }
  },
  created () {
    axios({
        url:drf.movies.gernes(),
        method:'get',
        
      })
      .then( res => {
        console.log(res.data)
        this.gernes = res.data
      })
    
  }
  

}
</script>

<style>

</style>