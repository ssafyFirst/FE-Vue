<template>
  <div>
    <button @click.prevent="addGerne">
    {{ gerne.name }}
    </button>
  </div>
</template>

<script>
export default {
  name:'GerneListItem',
  props:{
    gerne:Object
  },
  methods:{
    addGerne () {
      this.$emit('add-gerne', this.gerne)
    }
  }
}
</script>

<style>

</style>