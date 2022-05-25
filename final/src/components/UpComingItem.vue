<template>
<<<<<<< HEAD
  
    <div class="w-80">
      <b-carousel-slide
        :img-src="url + movie.poster_path"
      ></b-carousel-slide>
    </div>
    <!-- <img :src="url + movie.poster_path" alt="" class=""> -->
  
  

=======
  <b-carousel-slide
    :img-src="url + movie.poster_path"
  ></b-carousel-slide>
>>>>>>> bdaf2f681a638c4f37d7eaafe2910e7866ece652
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