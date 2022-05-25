import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    token : localStorage.getItem('token') || '',
    currentUser: {},
    profile : {},
    authError: null,
  },
  getters:{
    isLoggedIn : state => !!state.token,
    authHeader  (state) {
      return {Authorization: `Token ${state.token}`}
    },
    profile: state => state.profile,
    currentUser : state => state.currentUser,
    authError: state => state.authError,

    
  },
  mutations:{
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CURRENT_USER : (state, user) => state.currentUser = user,
    SET_PROFILE : (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error
    
  },
  actions:{
    saveToken ({ commit }, token) {
      commit('SET_TOKEN', token)
      
      localStorage.setItem('token', token)   // 새로고침 후에도 유지
      
    },
    removeToken ({ commit }) {
      
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },

    login ({ dispatch, commit }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
      .then(res => {        
        dispatch('saveToken', res.data.key)
        dispatch('fetchCurrentUser')
        router.push({name:'home'})
      })
      .catch(err => {
        console.error(err.response.data)
        commit('SET_AUTH_ERROR', err.response.data)
      })         
    },
    signup ({ dispatch, commit }, formData) {
      axios({
        url : drf.accounts.signup(),
        method : 'post',
        data : formData,
        // headers:{
        //   'Content-Type':'multipart/form-data'
        // }
      })
      .then(res => {
        dispatch('saveToken', res.data.key)
        dispatch('fetchCurrentUser')
        router.push({name:'home'})    
      })
      .catch(err => {
        console.error(err.response.data)
        commit('SET_AUTH_ERROR', err.response.data)
      })

    },
    // signup2 ({ getters, dispatch }, credentials) {
    //   axios({
    //     url : drf.accounts.signup2(credentials.username),
    //     method : 'put',
    //     headers : getters.authHeader, 
    //     data : credentials,
    //     // xsrfCookieName: 'XSRF-TOKEN', // 기본값

    //     // // `xsrfHeaderName`은 xsrf 토큰 값을 운반하는 HTTP 헤더의 이름입니다.
    //     // xsrfHeaderName: 'X-XSRF-TOKEN',
    //   })
    //   .then( (res) => {
    //     console.log(res)
    //     dispatch()
    //   })
    // },

    logout ({ getters, dispatch}) {
      axios({
        url:drf.accounts.logout(),
        method:'post',
        headers: getters.authHeader
      })
      .then(() => {
        dispatch('removeToken')
        alert('로그아웃 성공!')
        router.push({name:'login'})
      })
    },
    fetchCurrentUser ({ commit, getters, dispatch}) { // user 식별 위해
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader
        })
        .then(res => {
          
          commit('SET_CURRENT_USER', res.data)
          
        })
        .catch( err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({name:'login'})
          }
        })
      }
    },
    fetchProfile ({  commit, getters }, { username }) {
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader
      })
      .then( res => {
        commit('SET_PROFILE', res.data)
        // dispatch('fetchLikeGenres', res.data.like_genres)
      })
    },
    // fetchLikeGenres ({ commit, getters }, genres) {
    //   genres.forEach( genre => {
    //     axios({
    //       url:drf.movies.LikeGenres(genre),
    //       method:'get',
    //       headers: getters.authHeader
    //     })
    //     .then(res => {
    //       commit('SET_LIKE_GENRES', res.data)
    //     })
    //     .catch( err => console.log(res))
    //   })
    // },
    fetchGenres () {
      axios({
        url:drf.movies.genres(),
        method:'get',
        
      })
      .then( res => {
        console.log(res.data)
      })
    },
    
  }
}