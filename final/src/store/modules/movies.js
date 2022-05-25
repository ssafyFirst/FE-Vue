// import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    movies: [],
    page: 0,
    movie : {},
    comments : [],
    recommendMovies : [],
    movieactor : [],
    isreversed : false
    
  },
  getters:{
    movies: state => state.movies,
    page: state => state.page,
    movie: state => state.movie,
    comments : state => state.movie.comments,
    recommendMovies : state => state.recommendMovies,
    movieactor : state => state.movieactor,
    isreversed : state => state.isreversed
    
  },
  mutations:{
    FETCH_MOVIES: (state, movies) => state.movies.push(...movies),
    
    INCREASE_PAGE: (state, page) => state.page = page + 100,

    SET_MOVIE : (state, movie) => state.movie = movie,

    SET_COMMENTS : (state, comments) => state.movie.comments = comments,

    SET_MOVIE_COMMENTS : (state, comments) => state.movie.comments = comments,

    SET_RECOMMEND : (state, recommendMovies) => state.recommedMovies = recommendMovies,

    SET_MOVIE_ACTOR : (state, actors) => state.movieactor = actors,

    RESET_PAGE : (state) => state.page = 0,

    SET_ISREVERSED : (state) => state.isreversed = !state.isreversed,

    RESET_MOVIES : (state) => state.movies = []

    
  },
  actions:{
    resetMovies ({commit}) {
      commit('RESET_MOVIES')
    },



    fetchMovies ({ commit, getters }) {
      axios({
        url: drf.movies.movies(getters.page),
        method: 'get',
        // header: ____,
      })
        .then(res => {
          commit('FETCH_MOVIES', res.data)
          commit('INCREASE_PAGE', getters.page)
        })
        .catch(err => console.error(err.response))
    },


    fetchSortedMovies ({  getters, commit }, keyword) {
      if (getters.isreversed) {
        axios({
          url:drf.movies.sortmovies(keyword, getters.page),
          method:'get',
          headers:getters.authHeader
        })
        .then( res => {
          commit('FETCH_MOVIES', res.data)
          commit('INCREASE_PAGE', getters.page)
        })
        .catch(err => console.error(err.response))
      }
      else {
        axios({
          url:drf.movies.sortmovies2(keyword, getters.page),
          method:'get',
          headers:getters.authHeader
        })
        .then( res => {
          commit('FETCH_MOVIES', res.data)
          commit('INCREASE_PAGE', getters.page)
        })
        .catch(err => console.error(err.response))
      }
    },


    resetPage({  commit }) {
      commit('RESET_PAGE')    
    },
    reverse ({commit}) {
      commit('SET_ISREVERSED')
    },
    fetchMovie ({ dispatch, commit, getters }, movieId) {
      axios({
        url:drf.movies.movie(movieId),
        method:'get',
        headers:getters.authHeader,
      })
      .then(res => {
        commit('SET_MOVIE', res.data)
        const actors = [ 
          res.data.actor1,
          res.data.actor2,
          res.data.actor3
      ]
        dispatch('fetchMovieActor', actors)
      })
      .catch(err => console.error(err.response))
    },
    fetchMovieActor ({  commit, getters }, actors) {
      let newactors = []
      actors.forEach( actor => {
        axios({
          url:drf.actors.movieactor(actor),
          method:'get',
          headers:getters.authHeader
        })
        .then( res => {
          newactors.push(res.data)
        })
        .catch( err => {
          if (err.response.status === 404) {
            console.log('!!')
          }
        })
      })
      commit('SET_MOVIE_ACTOR', newactors)
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
    },
    updateComment({ commit, getters }, data) {
      /* 댓글 수정
      PUT: comment URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = {content : data.content}

      axios({
        url: drf.movies.comment(data.moviePk, data.commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, data) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: comment URL (token)
          성공하면
            응답으로 state.article의 comments 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.movies.comment(data.moviePk, data.commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_MOVIE_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
    },
    likeMovie({ commit, getters }, moviePk) {
      /* 좋아요
      POST: likeArticle URL(token)
        성공하면
          state.article 갱신
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.movies.likeMovie(moviePk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => console.error(err.response))
    },
    fetchRecommend ({commit, getters} ,username) {
      axios({
        url : drf.movies.recommend(username),
        method : 'get',
        headers : getters.authHeader
      })
      .then( res => {
        commit('SET_RECOMMEND', res.data)
      })
    }
  }
}