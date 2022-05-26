<template>
  <div
  :style="{ 'background-color': 'rgb(220, 218, 242)',
  'background-size': 'cover', 'width': '100vw', 'height': '100vh'}"
  >
    <b-card class="overflow-hidden" style="max-width: 700px; margin: 0 auto; display: inline-block; margin-top: 200px;">
    <b-row no-gutters>
      <b-col md="6">
      <b-card-img :src="url + actor.profile_path" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
    <h1>{{ actor.name }}</h1>
    <hr>
    <br>
    <h4><span class="badge bg-secondary mt-5">대표작</span></h4>
    <br>
      <actor-movie-item
      v-for="movie in actormovie"
      :key="movie.pk"
      :movie="movie"
      ></actor-movie-item>
    

  </b-col>
  </b-row>
  </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ActorMovieItem from '@/components/ActorMovieItem.vue'

export default {
  name:'ActorDetailView',
  components: { ActorMovieItem },
  data () {
    return {
      actorId : this.$route.params.actorId,
      url :'https://image.tmdb.org/t/p/w500/', 
    }
  },
  computed:{
    ...mapGetters(['actor', 'actormovie'])
  },
  methods:{
    ...mapActions(['fetchActor'])
  },
  created () {
    this.fetchActor(this.actorId)
  }

}
</script>

<style>

</style>