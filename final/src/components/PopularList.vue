<template>
<div class="mt-5">
  <b-button-group size="lg">
    <b-button class="m-1" @click="changeKeyword" variant="dark" value="popularity">인기순</b-button>
    <b-button class="m-1" @click="changeKeyword" variant="dark" value="title">이름순</b-button>
    <b-button class="m-1" @click="changeKeyword" variant="dark" value="released_date">개봉일순</b-button>
    <b-button class="m-1" @click="changeKeyword" variant="dark" value="vote_average">평점순</b-button>
  </b-button-group>
  <div class="mt-5">
    <b-card-group columns>
      <popular-list-item v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      style="float: left;"
      ></popular-list-item>
    </b-card-group>
  </div>
  <div class="morebutton ml-auto">
      <b-button  @click="fetchSortedMovies(keyword)" variant="success"> 더 보기 </b-button>
  </div>

  <b-button class="gototop" style="cursor:pointer;" onclick="window.scrollTo(0,0);" pill>TOP</b-button>
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
  bottom: 30px;
  left : 30px;
  
}
.gototop {
  position:fixed;
  right: 30px;
  bottom: 30px;
}
</style>