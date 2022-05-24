<template>
<div>
  <b-button>개봉일</b-button>
  <b-button>이름순</b-button>
  <b-button>평점순</b-button>
  <div class="row">
    <popular-list-item v-for="movie in movies"
    :key="movie.pk"
    :movie="movie"
    ></popular-list-item>
    <button @click="fetchMovies"> 더 보기 </button>
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
      
      
    }
  },
  components:{
    PopularListItem,
  },
  computed: {
    ...mapGetters(['movies']),
  },
  methods:{       // 교수님 콜
    ...mapActions(['fetchMovies']),
    test() {
        setTimeout(() => {
           if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) { 
          this.fetchMovies()   
      }
          console.log(2)  
        }, 1000);
    }
  },

  created() {
    this.fetchMovies()
  },

  // mounted() {
  //   document.addEventListener('scroll', this.test)
  // }
}
          






</script>

<style>

</style>