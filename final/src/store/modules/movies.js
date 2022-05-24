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
    recommendMovies : []

  },
  getters:{
    movies: state => state.movies,
    page: state => state.page,
    movie: state => state.movie,
    comments : state => state.movie.comments,
    recommendMovies : state => state.recommendMovies
  },
  mutations:{
    FETCH_MOVIES: (state, movies) => state.movies.push(...movies),
    
    INCREASE_PAGE: (state, page) => state.page = page + 100,

    SET_MOVIE : (state, movie) => state.movie = movie,

    SET_COMMENTS : (state, comments) => state.movie.comments = comments,

    SET_MOVIE_COMMENTS : (state, comments) => state.movie.comments = comments,

    SET_RECOMMEND : (state, recommendMovies) => state.recommedMovies = recommendMovies
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