<template>
  <div>
    <router-link :to="{ name:'actordetail', params: {actorId:actor.id} }">{{ actor.name }}</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MovieActorItem',
  props:{
    actor:Object
  }
}
</script>

<style>

</style>