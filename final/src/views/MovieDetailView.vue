<template>
  <div>moviedetail
    {{ movie.overview }}
  
    <form @submit.prevent="addComment">
      <input type="text" v-model="content">
      <button>입력</button>
    </form>
    <comment-list :comments="this.movie.comments"></comment-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentList from '@/components/CommentList.vue'

export default {
  name: 'MovieDetailView',
  components: { CommentList },
    data() {
      return {
        movieId: this.$route.params.movieId,
        content : ''
      }
    },
    computed: {
      ...mapGetters(['movie', 'comments']),
      likeCount() {
        return this.movie.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchMovie',
        'likeMovie',      
      ]),
      
      addComment () {
        const context = {
          movieId: this.movieId,
          data: {content:this.content,}
        }
        this.$store.dispatch('addComment', context)
        this.content = ''
        
      }
    },
    created() {
      this.fetchMovie(this.movieId)
    },
  
}
</script>

<style>

</style>