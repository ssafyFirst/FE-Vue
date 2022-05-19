<template>
  <div>
    <up-coming></up-coming>
    <popular-list></popular-list>
  </div>
</template>

<script>
import PopularList from '@/components/PopularList.vue'
import UpComing from '@/components/UpComing.vue'

export default {
  name:'HomeView',
  components:{
    PopularList,
    UpComing,
  },

}
</script>
 
<style>

</style>