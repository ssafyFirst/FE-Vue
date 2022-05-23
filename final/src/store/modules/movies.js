// import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    movies: [],
    page: 0,
    movie : {},
    comments : []

  },
  getters:{
    movies: state => state.movies,
    page: state => state.page,
    movie: state => state.movie,
    comments : state => state.movie.comments
  },
  mutations:{
    FETCH_MOVIES: (state, movies) => state.movies.push(...movies),
    
    INCREASE_PAGE: (state, page) => state.page = page + 100,

    SET_MOVIE : (state, movie) => state.movie = movie,

    SET_COMMENTS : (state, comments) => state.movie.comments = comments
  },
  actions:{
    fetchMovies ({ commit }) {
      axios({
        url: drf.movies.movies(this.getters.page),
        method: 'get',
        // header: ____,
      })
        .then(res => {
          commit('FETCH_MOVIES', res.data)
          commit('INCREASE_PAGE', this.getters.page)
        })
        .catch(err => console.error(err.response))
    },
    fetchMovie ({ commit, getters }, movieId) {
      axios({
        url:drf.movies.movie(movieId),
        method:'get',
        headers:getters.authHeader,
      })
      .then(res => {commit('SET_MOVIE', res.data)
      console.log(res.data)
      
    
    })
      .catch(err => console.error(err.response))
    },
    
    addComment ({ commit, getters }, context) {
      axios({
        url:drf.movies.comments(context.movieId),
        method:'post',
        data: context.data,
        headers: getters.authHeader
      })
      .then( res => {
        console.log(res)
        console.log(res.data)
        commit('SET_COMMENTS', res.data)
        
      })
      .catch( err => console.error(err))
    }
  }
}