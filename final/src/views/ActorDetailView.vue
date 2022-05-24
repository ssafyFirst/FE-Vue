<template>
  <div>
    <h1>{{ actor.name }}</h1>
    <img :src="url + actor.profile_path" alt="">
    <h2>대표작:
      {{ actor.movie1 }}
      <actor-movie-item
      v-for="movie in actormovie"
      :key="movie.pk"
      :movie="movie"
      ></actor-movie-item>
    </h2>

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