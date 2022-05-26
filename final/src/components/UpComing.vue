<template>
<div>
  <div>
    <h1><span class="badge rounded-pill bg-light text-dark">개봉예정작</span></h1>
    <div id="recommend" class="h-50">
      <split-carousel
      
      height="230"
      display-amount=7>
        <split-carousel-item v-for="movie in upcomingMovie"
            :key="movie.id"
            >
          <div class="card">
            <img  :src="imgurl+movie.poster_path" width="120" height="230">
          </div>
        </split-carousel-item>
      </split-carousel>
    </div>
  </div>
  <div>
    <h1><span class="badge rounded-pill bg-light text-dark mt-3">상영작</span></h1>
        <div id="recommend" class="h-50">
      <split-carousel
      play-direction="rtl"
      height="230"
      display-amount=7>
        <split-carousel-item v-for="movie in nowplayingMovies"
            :key="movie.id"
            >
          <div class="card">
            <img  :src="imgurl+movie.poster_path" width="120" height="230">
          </div>
        </split-carousel-item>
      </split-carousel>
    </div>
  </div>





</div>
</template>

<script>
// import UpComingItem from '@/components/UpComingItem.vue'
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
import axios from 'axios'

export default {
  name:'UpComing',
    components:{
      // UpComingItem,
      SplitCarousel,
      SplitCarouselItem
    },
  data () {
    return {
      upcomingMovie:[],

      imgurl:'https://image.tmdb.org/t/p/w300',
      nowplayingMovies:[]
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
      .then(res => {this.upcomingMovie.push(...res.data.results)  })
      .catch(err => console.error(err)),
    axios({
      url:'https://api.themoviedb.org/3/movie/now_playing/',
      params:{
        api_key:'7f292cc09a9aff763e3e54a81c1ec05a',
        language:'ko'
      },
      method: 'get'
    })
      .then(
        res => {this.nowplayingMovies.push(...res.data.results)
        
        }
      )
      .catch(err => console.error(err))
    
  }
}
</script>

<style>

</style>