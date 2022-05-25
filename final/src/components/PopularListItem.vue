<template>
  <b-card class="square one">
    <router-link :to="{ name: 'moviedetail', params: {movieId:movie.id} }">
    <b-card-img :src="url+movie.poster_path" alt=""
    @mouseenter="showDetail"
    style="height: 300px; width: 200px;"
    ></b-card-img>
    </router-link>
  </b-card>
</template>

<script>


export default {
  name:'PopularListItem',
  
  data() {
    return {
      url:'https://image.tmdb.org/t/p/w300/',
    }
  },
  props: {
    movie:Object
  },
  methods:{
    showDetail () {
    }
  }

}

</script>

<style>
.square img{
  background-size: cover!important;
  background-position: center!important;
  display: inline-block;
  transition: all 0.4s linear;
  /* position: relative; */
}

.square img:hover {
  position: sticky;
  z-index: 1;
  background: url(), skyblue;
  /* background-size: cover; */
  border-radius: 10px 10px 0 0;
  transform: scale(1.5);
  box-shadow: 0 0 2px #000a;
}

.square::after {
  top: 100px;
  display: block;
  background: #18181818;
  box-shadow: 0 0 2px #000a;
  color: #fff;
  width: 150px;
  height: fit-content;
  padding: 5px;
  box-sizing: border-box;
  opacity: 0;
  border-radius: 0 0 10px 10px;
  transition: opacity 300ms ease-out, border-radius 200ms ease-out;
}

/* .square:hover::after {
  opacity: 1;
}

.square.one::after {
  content: 'Never Gonna Give You Up!';
} */
</style>