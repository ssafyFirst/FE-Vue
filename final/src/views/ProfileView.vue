<template>
  <div>
    
    <h2>{{ profile.username }}</h2>
    <img :src=" url + profile.profile_img " alt="">
    <h3>좋아하는 장르</h3>
    <like-genre-list-item
    v-for="genre in profile.like_genres"
    :key="genre.id"
    :genre="genre"
    ></like-genre-list-item>
    <h3>좋아하는 영화</h3>
    <like-movie-list-item
    v-for="movie in profile.like_movies"
    :key="movie.id"
    :movie="movie"
    ></like-movie-list-item>

    
    

    <router-link :to="{ name: 'recommend', params: profile.username }">추천</router-link>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import LikeMovieListItem from '@/components/LikeMovieListItem.vue'
import LikeGenreListItem from '@/components/LikeGenreListItem.vue'

export default {
  name:'ProfileView',
  components:{  LikeMovieListItem, LikeGenreListItem },
  data () {
    return {
      url : "http://127.0.0.1:8000",
      imgurl:'https://image.tmdb.org/t/p/w500/'
    }
  },
  computed : {
    ...mapGetters(['profile'])
  },
  methods : {
    ...mapActions(['fetchProfile'])
  },
  created () {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  }

}
</script>

<style>

</style>