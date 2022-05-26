<template>
<div class="mb-5">
  <div class="sortbutton my-3">
    <b-button class="m-1" @click="changeKeyword" value="popularity">인기</b-button>
    <b-button class="m-1" @click="changeKeyword" value="title">이름</b-button>
    <b-button class="m-1" @click="changeKeyword" value="released_date">개봉일</b-button>
    <b-button class="m-1" @click="changeKeyword" value="vote_average">평점</b-button>
  </div>
  <div class="mb-5">
    <b-card-group columns>
      <popular-list-item v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      style="float: left;"
      ></popular-list-item>
    </b-card-group>
  </div>
  <div class="morebutton mt-3">
    <b-button  @click="fetchSortedMovies(keyword)" > 더 보기 </b-button>
  </div>
</div>
</template>


<script>
// import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
import PopularListItem from '@/components/PopularListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'PopularList',
  data () {
    return {
      keyword : 'popularity',
      
      
    }
  },
  components:{
    PopularListItem,
    
  },
  computed: {
    ...mapGetters(['movies', 'isreversed']),
  },
  methods:{       // 교수님 콜
    ...mapActions(['fetchMovies', 'fetchSortedMovies', 'resetPage', 'reverse', 'resetMovies']),
    changeKeyword (event) {
      if (this.keyword === event.target.value) {  
        this.resetMovies()
        this.resetPage()
        this.reverse()
        this.fetchSortedMovies(this.keyword)
      }
      else {
        this.keyword = event.target.value
        this.resetMovies()
        this.resetPage()
        this.fetchSortedMovies(this.keyword)
      }     
    }
    // test() {
    //     setTimeout(() => {
    //        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) { 
    //       this.fetchMovies()   
    //   }
    //       console.log(2)  
    //     }, 1000);
    // }
  },

  created() {
    // this.fetchSortedMovies(this.keyword)
    // this.fetchMovies()
  },

  // mounted() {
  //   document.addEventListener('scroll', this.test)
  // }
}
          






</script>

<style>
.morebutton {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>