<template>
  <div id="home">
    <div class="my-3">
      <up-coming></up-coming>
    </div>
    <div class="my-3 ">
      <popular-list></popular-list>
    </div>
    
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
#home {
  width: 80%;
  margin: auto;
}

</style>