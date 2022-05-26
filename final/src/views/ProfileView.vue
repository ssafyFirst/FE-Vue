<template>
  <b-container>
    <b-row class="mt-5">
    <b-col cols="3">
      <div class="profile-img" style="margin: 0 auto">
      <img :src=" url + profile.profile_img " class="profile-img-img">
      </div>
      <h3>{{ profile.username }}</h3>
      <b-row>
        <b-col style="border-right: 1px solid black;">
          <h2 class="fw-bold" style="color:purple">{{ profile.comments.length }}</h2>
          <h5>댓글 수</h5>
        </b-col>
        <b-col>
          <h2 class="fw-bold" style="color:purple">{{ profile.like_movies.length }}</h2>
          <h5>좋아하는 영화</h5>
          
        </b-col>
        <br>
        <hr>
        <h3>좋아하는 장르</h3>
      <like-genre-list-item
      v-for="genre in profile.like_genres"
      :key="genre.id"
      :genre="genre"
      ></like-genre-list-item>
      </b-row>
    </b-col>

    <b-col cols="9">
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="좋아하는 영화">
            <b-card-group columns>
              <like-movie-list-item
              v-for="movie in profile.like_movies"
              :key="movie.id"
              :movie="movie"
              style="float: left;"
              ></like-movie-list-item>
            </b-card-group>
          </b-tab>

          <b-tab no-body title="작성한 댓글">
            <b-table striped hover :items="profile.comments" :fields="fields"></b-table>
          </b-tab>

          <b-tab no-body title="추천받으러 가기">
            <router-link :to="{ name: 'recommend', params: profile.username }">
            <h3><span class="badge mt-3" style="color:purple">{{ profile.username }}님에게 어울리는 영화 보러가기</span></h3>
            </router-link>
            <router-view/>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
    
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import LikeMovieListItem from '@/components/LikeMovieListItem.vue'
import LikeGenreListItem from '@/components/LikeGenreListItem.vue'

export default {
  name:'ProfileView',
  components:{  LikeMovieListItem, LikeGenreListItem },
  data () {
    return {
      url : "http://127.0.0.1:8000",
      imgurl:'https://image.tmdb.org/t/p/w500/',
      fields: ['content', 'updated_at']
    }
  },
  computed : {
    ...mapGetters(['profile'])
  },
  methods : {
    ...mapActions(['fetchProfile'])
  },
  created () {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  }

}
</script>

<style>
  .profile-img{
    width: 261px;
    height: 261px;
    border-radius: 30%;
    overflow: hidden;
  }
  .profile-img-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>