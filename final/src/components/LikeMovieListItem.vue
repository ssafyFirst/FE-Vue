<template>
  <div>
    <img :src="url + movie.poster_path" alt="">
  </div>
</template>

<script>
export default {
  name:'LikeMovieListItem',
  props:{
    movie:Object
  },
  data () {
    return {
      url:'https://image.tmdb.org/t/p/w500/'
    }
  }
}
</script>

<style>

</style>