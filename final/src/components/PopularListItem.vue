<template>
  <div class="card" style="width: 18rem;">
    <img :src="url+movie.poster_path" alt="" @mouseenter="showDetail">
    
  </div>
</template>

<script>


export default {
  name:'PopularListItem',
  
  data () {
    return {
      url:'https://image.tmdb.org/t/p/w500/'
    }
  },
  props:{
    movie:Object
  },
  methods:{
    showDetail () {
      console.log(1)
    }
  }

}

</script>

<style>

</style>