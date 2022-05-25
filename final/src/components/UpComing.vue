<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="400"
      img-height="480"
    >
      <up-coming-item
      v-for="( movie, index) in upcomingMovie"
      :key="movie.id"
      :movie="movie"
      :index="index"
      ></up-coming-item>
  </b-carousel>
  </div>
  
</template>

<script>
import UpComingItem from '@/components/UpComingItem.vue'

import axios from 'axios'

export default {
  name:'UpComing',
    components:{
      UpComingItem,
    },
  data () {
    return {
      upcomingMovie:[],
      slide: 0,
      sliding: null
    }
  },
  created () {
    axios({
      url:'https://api.themoviedb.org/3/movie/upcoming/',
      params:{
        api_key:'7f292cc09a9aff763e3e54a81c1ec05a',
        language:'ko'
      },
      method: 'get'
    })
      .then(
        res => {this.upcomingMovie.push(...res.data.results)
        
        }
      )
      .catch(err => console.error(err))
  }
}
</script>

<style>

</style>