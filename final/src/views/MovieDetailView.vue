<template>
  <div>
    <h1>{{ movie.title }}</h1>
    {{ movie.overview }}
    <br>
    <img :src="url + movie.poster_path" alt="">
    
    <br>
    {{ movie.released_data }}
    <br>
    <movie-actor-item
    v-for="actor in movieactor"
    :key="actor.id"
    :actor="actor"
    ></movie-actor-item>



    <div>
      Likeit:
      <button
        @click="likeMovie(movieId)"
      >{{ likeCount }}</button>
    </div>
    
  
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
import MovieActorItem from '@/components/MovieActorItem.vue'

export default {
  name: 'MovieDetailView',
  components: { CommentList, MovieActorItem },
    data() {
      return {
        movieId: this.$route.params.movieId,
        content : '',
        url:'https://image.tmdb.org/t/p/w500/',
      }
    },
    computed: {
      ...mapGetters(['movie', 'comments', 'movieactor']),
      likeCount() {
        return this.movie.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchMovie',
        'likeMovie',
        'fetchMovieActor'      
      ]),
      
      addComment () {
        const context = {
          movieId: this.movieId,
          data: {content:this.content,},
          actorIds : {
            actor1Id: '',
            actor2Id: '',
            actor3Id: ''
          }
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