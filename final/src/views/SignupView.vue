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
       
         <genre-list-item
         v-for="genre in genres"
         :key="genre.id"
         :genre="genre"
         @add-genre="getGenre">
         </genre-list-item>
       

      <button @click.prevent="signup(formData)">회원가입</button>
    </form>
  </div>
</template>

<script>
// import http from '../http-common'
// import { mapActions } from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
import GenreListItem from '@/components/GenreListItem.vue'

export default {
  name:'SignupView',
  components:{
    GenreListItem,
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
      mygenres : []
    }
  },
  computed:{

  },
  methods:{
    getGenre (genre) {
      this.mygenres.push(genre.id)
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
      
      this.formData.append('profile_img', event.target.files[0])       
    }
  },
  created () {
    axios({
        url:drf.movies.genres(),
        method:'get',
        
      })
      .then( res => {
        console.log(res.data)
        this.genres = res.data
      })
    
  }
  

}
</script>

<style>

</style>