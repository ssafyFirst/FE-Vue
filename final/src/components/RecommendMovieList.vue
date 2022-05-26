<template>
<div id="recommendmovie">
  
    <b-card-group columns>
      <recommend-movie-item v-for="movie in recommendMovies"
      :key="movie.id"
      :movie="movie"
      style="float: left;"
      ></recommend-movie-item>
    </b-card-group>
  
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import RecommendMovieItem from '@/components/RecommendMovieItem.vue'

export default {
  name:'RecommendMovieList',
  components: { RecommendMovieItem },
  computed:{
    ...mapGetters(['recommendMovies'])
  }
}
</script>

<style>
#recommendmovie {
  width: 80%;
  margin: auto;
}
</style>