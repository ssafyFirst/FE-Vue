<template>
  <div>
    <router-link :to="{ name:'moviedetail', params:{movieId:movie.pk}}">{{ movie.title }}</router-link>
  </div>
</template>

<script>
export default {
  name:'ActorMovieItem',
  props:{
    movie:Object
  }
}
</script>

<style>

</style>