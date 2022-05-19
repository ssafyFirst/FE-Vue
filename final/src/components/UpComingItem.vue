<template>
  <div>
    <img :src="url + movie.poster_path" alt="">
  </div>

</template>

<script>
export default {
  name:'UpComingItem',
  data () {
    return{
      url:'https://image.tmdb.org/t/p/w500/'
    }
  },
  props:{
    movie:Object
  }
}
</script>

<style>

</style>