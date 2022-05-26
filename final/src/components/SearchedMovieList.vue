<template>
  <b-card class="square one">
    <router-link :to="{ name: 'moviedetail', params: {movieId:movie.id} }">
    <b-card-img :src="url+movie.poster_path" alt=""
    @mouseenter="showDetail"
    style="height: 300px; width: 200px;"
    ></b-card-img>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name:'SearchedMovieList',
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