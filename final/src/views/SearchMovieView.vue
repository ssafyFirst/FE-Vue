<template>
  <div id="search">
    <h1>검색된 영화들</h1>
    <!-- <div class="sortbutton my-3">
      <b-button class="m-1" @click="changeKeyword" value="popularity">인기</b-button>
      <b-button class="m-1" @click="changeKeyword" value="title">이름</b-button>
      <b-button class="m-1" @click="changeKeyword" value="released_date">개봉일</b-button>
      <b-button class="m-1" @click="changeKeyword" value="vote_average">평점</b-button>
    </div> -->
    <div class="">
      <b-card-group columns>
        <searched-movie-list v-for="movie in searchedMovies"
        :key="movie.id"
        :movie="movie"
        style="float: left;"
        ></searched-movie-list>
      </b-card-group>
    </div>

  </div>
</template>

<script>
import drf from '@/api/drf'
import axios from 'axios'
import SearchedMovieList from '@/components/SearchedMovieList.vue'
import { mapGetters, mapActions } from 'vuex'
// import router from "@/router"

export default {
  name:'SearchMovieView',
  components:{ SearchedMovieList },
  data () {
    return {
      searchedMovies : [],
      sort : 'title'
    }
  },
  computed: {
    ...mapGetters('searchMovies', 'currentUser')
  },
  methods: {
    ...mapActions(['searchKeyword', 'fetchProfile']),
    changeKeyword (event) {
      if (this.keyword === event.target.value){
        this.searchedMovies = []
        axios({
          url:drf.movies.searchsort(this.$route.params.keyword, this.sort),
          method :'get',
          headers:this.$store.getters.authHeader
        })
        .then( res=> this.searchedMovies = res.data)


      }
      else {
        this.keyword = event.target.value
        this.searchedMovies = []
        axios({
          url:drf.movies.searchsort(this.$route.params.keyword, this.sort),
          method :'get',
          headers:this.$store.getters.authHeader
        })
        .then( res=> this.searchedMovies = res.data)
      }
    }
  },
  created () {
    if (this.$route.params.keyword) {
    axios({
        url:drf.movies.search(this.$route.params.keyword),
        method:"get",
        headers:this.$store.getters.authHeader
      })
      .then( res => {
        this.searchedMovies = res.data
      })}
    else {
    axios({
        url:drf.movies.nosearch(),
        method:"get",
        headers:this.$store.getters.authHeader
      })
      .then( res => {
        this.searchedMovies = res.data
      })}      
    this.fetchProfile(this.currentUser.username)
    }
}

  

</script>

<style>
#search{
  width: 80%;
  margin: auto;
}
</style>