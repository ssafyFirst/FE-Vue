<template>
  <div>
    <b-navbar v-if="isLoggedIn" toggleable="lg" type="dark" variant="light">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img class="w-50 h-50" src="@/assets/logo22.png" alt="">
        </router-link>
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav class="justify-content-end inline">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <form class="searchForm d-flex form-inline my-2 my-lg-0" @submit.prevent="searchKeyword">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword" >
            <div class="mx-3">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
            </div>
          </form>
          <!-- <button class="mx-3" @click="darkModeToggle">darkMode</button> -->
          <b-avatar :src="url + currentUser.profile_img" v-b-toggle.sidebar-backdrop size="5rem"></b-avatar>

        <b-sidebar
          id="sidebar-backdrop"
          :backdrop-variant="variant"
          backdrop
          shadow  
          right="True"
        >
        <div v-if="isLoggedIn">
          <br>
          <router-link :to="{ name: 'profile', params: { username: currentUser.username } }">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="me-4" variant="info" :src="url + currentUser.profile_img"></b-avatar>
            <span class="mr-auto">{{ currentUser.username }}</span>
          </b-list-group-item>
          </router-link>
          <log-out></log-out>
        </div>
        <div v-else>
          <router-link  to="/login">login</router-link>
        </div>
        <br>
        <br>
        <br>
        <map-item></map-item>         
        </b-sidebar>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


  </div>
</template>

<script>
import LogOut from '@/components/LogOut.vue'
import MapItem from '@/components/MapItem'
import { mapGetters, mapActions } from 'vuex'
import router from "@/router"

export default {
  name:'NavBar',
  components:{
    LogOut,
    MapItem,
    
  },
  data() {
    return {
      variant: 'dark',
      keyword: '',
      url : "http://127.0.0.1:8000",
    }
  },
  computed :{
    ...mapGetters(['isLoggedIn', 'currentUser' ,'profile']),
    username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
  },
  mounted() {
    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.add("lightmode");
    }
  },
  methods:{
    ...mapActions(['fetchProfile']),
    searchKeyword () {
      router.push({name:'search', params:{keyword:this.keyword.trim()}})
      location.reload()
    },
    created() {
      this.fetchProfile(this.username)
    },
    mounted() {
      this.fetchProfile(this.username)
    },
  }
  
}
</script>

<style>
:root {
    background-color: #f7f7f7;
    /*variables*/
    --title-color: #42b983;
    --content-color: #777;
}

.hello .hello__title {
    color: var(--title-color);
    font-weight: 600;
    transition: color 0.15s
}

.hello .hello__content {
    color: var(--content-color);
}

.searchForm input{
  height: 50%;
  margin: auto;
}
.searchForm div{
  height: 50%;
  margin: auto;
}

</style>