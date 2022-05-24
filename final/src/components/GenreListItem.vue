<template>
  <div>
    <button @click.prevent="addGenre">
    {{ genre.name }}
    </button>
  </div>
</template>

<script>
export default {
  name:'GenreListItem',
  props:{
    genre:Object
  },
  methods:{
    addGenre () {
      this.$emit('add-genre', this.genre)
    }
  }
}
</script>

<style>

</style>