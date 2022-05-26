<template>
  <div>search

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name:'SearchMovieView',
  computed: {
    ...mapGetters('searchMovies')
  },
  methods: {
    ...mapActions(['searchKeyword'])
  },
  created () {
    // searchKeyword(this.$route.params.keyword)
    }

}
</script>

<style>

</style>