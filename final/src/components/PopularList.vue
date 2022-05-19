<template>
  <div class="row">
    <popular-list-item v-for="movie in movies"
    :key="movie.pk"
    :movie="movie"
    ></popular-list-item>
  </div>
</template>


<script>
import PopularListItem from '@/components/PopularListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'PopularList',
  components:{
    PopularListItem,
  },
  computed: {
    ...mapGetters(['movies']),
  },
  methods:{       // 교수님 콜
    ...mapActions(['fetchMovie']),
    test() {
        setTimeout(() => {
           if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) { 
          this.fetchMovie()   
      }
          console.log(2)  
        }, 1000);
    }
  },

  created() {
    this.fetchMovie()
  },

  mounted() {
    document.addEventListener('scroll', this.test)
  }
}
          






</script>

<style>

</style>