// import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    movies: [],
    page: 0

  },
  getters:{
    movies: state => state.movies,
    page: state => state.page
  },
  mutations:{
    FETCH_MOVIE: (state, movies) => state.movies.push(...movies),
    
    INCREASE_PAGE: (state, page) => state.page = page + 100
  },
  actions:{
    fetchMovie ({ commit }) {
      axios({
        url: drf.movies.movies(this.getters.page),
        method: 'get',
        // header: ____,
      })
        .then(res => {
          commit('FETCH_MOVIE', res.data)
          commit('INCREASE_PAGE', this.getters.page)
        })
        .catch(err => console.error(err.response))
    }
  }
}