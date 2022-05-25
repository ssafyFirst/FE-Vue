<template>
  <div>
    <div class="w-80">
      <b-carousel-slide
      w-70
        :img-src="url + movie.poster_path"
      ></b-carousel-slide>
    </div>
    <!-- <img :src="url + movie.poster_path" alt="" class=""> -->
  
  </div>

</template>

<script>
export default {
  name:'UpComingItem',
  data () {
    return{
      url:'https://image.tmdb.org/t/p/w500/',
      isActive : (this.index === 0) ? true:false
    }
  },
  props:{
    movie:Object,
    index:Number
  }
}
</script>

<style>

</style>