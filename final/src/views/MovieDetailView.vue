<template>
  <div
  :style="{ 'background-image': 'url(' + url + movie.backdrop_path + ')',
  'background-size': 'cover', 'width': '100vw', 'height': '100vh'}"
  >
  <b-card class="overflow-hidden" style="max-width: 1000px; mx">
  <b-row no-gutters class="d-flex text-align-center">
    <b-col md="4">
      <b-card-img :src="url + movie.poster_path" alt="Image" class="rounded-0"></b-card-img>
    </b-col>
    <b-col md="4">
    <h1>{{ movie.title }}</h1>
    {{ movie.overview.substr(0, 150) + '...'}}
    {{ movie.released_data }}
    <movie-actor-item
    v-for="actor in movieactor"
    :key="actor.id"
    :actor="actor"
    ></movie-actor-item>
    </b-col>


    <b-col md="4">
    <div>
      Likeit:
      <button
        @click="likeMovie(movieId)"
      >{{ likeCount }}</button>
    </div>
    
  
    <comment-list :comments="this.movie.comments"></comment-list>
    <form @submit.prevent="addComment">
      <input type="text" v-model="content">
      <button>입력</button>
    </form>
    </b-col>
    </b-row>
    </b-card>
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