<template>
  <div>
    <up-coming-item
    v-for="movie in upcomingMovie"
    :key="movie.id"
    :movie="movie"
    ></up-coming-item>
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
      upcomingMovie:[]
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