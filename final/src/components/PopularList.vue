<template>
<div>
  <div>
    <button @click="changeKeyword" value="popularity">인기</button>
    <button @click="changeKeyword" value="title">이름</button>
    <button @click="changeKeyword" value="released_date">개봉일</button>
    <button @click="changeKeyword" value="vote_average">평점</button>
  </div>
  <div class="row">
    <popular-list-item v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
    ></popular-list-item>
    <button @click="fetchSortedMovies(keyword)"> 더 보기 </button>
  </div>
</div>
</template>


<script>
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

</style>