<template>
  <div>
      <actor-list-item></actor-list-item>
  </div>
</template>

<script>
import ActorListItem from '@/components/ActorListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'ActorListView',
    components:{
        ActorListItem,
    },
    computed: {
        ...mapGetters(['actors'])
    },
    methods : {
        ...mapActions(['fetchActors']),
        test() {
        setTimeout(() => {
           if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) { 
          this.fetchActors()   
      }
           
        }, 1000);
    }
  },
  created () {
      this.fetchActors()
  },
  mounted() {
      document.addEventListener('scroll', this.test)
  }
}
</script>

<style>

</style>