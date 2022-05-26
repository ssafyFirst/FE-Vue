<template>
  
  <div id="recommend" class="h-25">
		<h2>{{username}}님 이런영화는 어떠세요?</h2>
    <split-carousel
		width=120
		height=230
		display-amount=6>
      <split-carousel-item v-for="recommendMovie in recommendMovies"
					:key="recommendMovie.id">
        <div class="card">
					<img  :src="url+recommendMovie.poster_path" >
				</div>
      </split-carousel-item>
    </split-carousel>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";


export default {
    name:'RecommendMovie',
		components:{
			SplitCarousel,
      SplitCarouselItem
		},
		data () {
			return {
				username : this.$route.params.username,
				url : 'https://image.tmdb.org/t/p/w300/',
				slide: 0,
			}
		},
		computed: {
			...mapGetters(['recommendMovies'])
		},
    methods:{
			...mapActions(['fetchRecommend']),
		
    },
    created  () {
			this.fetchRecommend(this.username)
    }
}
</script>

<style scoped>
#recommend {
	width: 800px;
	margin: 60px auto;
}
div {
	height: 100%;
	width: 100%
}
.carousel-container{
	height: 512px;
	width: 240px;
	margin: auto;
}
.slide-container{
	height: 512px;
	width: 80%;
	margin: auto;
}
.moviecard {
	height: 100%;
	overflow:hidden;
}
</style>