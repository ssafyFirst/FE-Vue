<template>
  <div>rec


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