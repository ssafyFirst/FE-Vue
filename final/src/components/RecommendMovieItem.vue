<template>
  <b-card class="square one">
    <router-link :to="{ name: 'moviedetail', params: {movieId:movie.id} }">
    <b-card-img :src="url+movie.poster_path" alt=""
    style="height: 300px; width: 200px;"
    ></b-card-img>
    </router-link>
  </b-card>
</template>

<script>
// import mapGetters from 'vuex'

export default {  
  name:"RecommendMovieItem",
  props:{ movie:Object },
  data() {
  return {
    url:'https://image.tmdb.org/t/p/w300/',
   }
  },

}
</script>

<style>

</style>