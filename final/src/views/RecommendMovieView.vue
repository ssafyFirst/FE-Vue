<template>
  <div>
		<h1 v-if="matchperson"> {{ username }}님 이런 영화는 어떠세요?</h1>
		<h1 v-else>{{ username }} 님의 추천목록</h1>
		<recommend-movie-list></recommend-movie-list>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RecommendMovieList from '@/components/RecommendMovieList.vue'
// import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";


export default {
    name:'RecommendMovie',
		components:{
			// SplitCarousel,
      // SplitCarouselItem
			RecommendMovieList
		},
		data () {
			return {
				username : this.$route.params.username,
				url : 'https://image.tmdb.org/t/p/w300/',
				slide: 0,
			}
		},
		computed: {
			...mapGetters(['recommendMovies', 'profile', 'currentUser']),
			matchperson () {
				return this.profile.username === this.currentUser.username ? true:false
			}
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