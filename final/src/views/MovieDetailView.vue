<template>
  <div
  :style="{ 'background-image': 'url(' + url + movie.backdrop_path + ')',
  'background-size': 'cover', 'width': '100vw', 'height': '100vh'}"
  >
  <b-card  style="max-width: 1000px; margin: 0 auto; display: inline-block; margin-top: 200px; overflow: auto;">
  <b-row no-gutters>
    <b-col md="4">
      <b-card-img :src="url + movie.poster_path" alt="Image" class="rounded-0"></b-card-img>
    </b-col>
    <b-col md="4" style="position: relative">
    <h1>{{ movie.title }}</h1>
    {{ movie.overview.substr(0, 125) + '...'}}
    <br>
    <br>
    <span class="badge rounded-pill bg-dark">개봉일 : {{ movie.released_date }}</span>
    <br>
    <span class="badge rounded-pill bg-success">평점 : {{ movie.vote_average }}</span>
    <hr>
    <h4><span class="badge bg-secondary">출연진</span></h4>
    <movie-actor-item
    v-for="actor in movieactor"
    :key="actor.id"
    :actor="actor"
    ></movie-actor-item>
    <div style="position: absolute; bottom: 0;">
    <b-button @click="likeMovie(movieId)" variant="primary">
      좋아요
      <span class="badge"
      >{{ likeCount }}</span>
    </b-button>
    </div>
    </b-col>

    <b-col md="4" style="position: relative;">
    <comment-list :comments="this.movie.comments"></comment-list>
    
    <form @submit.prevent="addComment" style="position: absolute; bottom: 0;" class="ms-4">
      <input type="text" v-model="content" placeholder="댓글 달기...">
      <b-button variant="outline-primary" class="mx-3">게시</b-button>
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