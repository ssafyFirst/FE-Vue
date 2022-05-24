<template>
  <div>rec
		<h1>장르로 추천받기</h1>

		<h1>좋아하는 영화로 추천받기</h1>

		<h1>좋아하는 영화의 주연 3명으로 추천받기 </h1>

		<h1>날씨로 추천받기 </h1>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'RecommendMovie',
		data () {
			return {
				username : this.$route.params.username
			}
		},
		computed: {
			...mapGetters(['recommendMovies'])
		},
    methods:{
			...mapActions(['fetchRecommend'])
    },
    created  () {
			this.fetchRecommend(this.username)
    }


}
</script>

<style>

</style>