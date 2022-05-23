import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    token : localStorage.getItem('token') || '',
    currentUser: localStorage.getItem('currentUser') || '',
    profile : {}
  },
  getters:{
    isLoggedIn : state => !!state.token,
    authHeader  (state) {
      return {Authorization: `Token ${state.token}`}
    },
    profile: state => state.profile,
    currentUser : state => state.currentUser

    
  },
  mutations:{
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CURRENT_USER : (state, user) => state.currentUser = user,
    SET_PROFILE : (state, profile) => state.profile = profile
    
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

    login ({dispatch}, credentials) {
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
    },
    signup ({ dispatch }, formData) {
      console.log(formData)
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
        router.push({name:'signup2'})
        console.log(res.data.key)
      })

    },
    signup2 ({ getters, dispatch } ,credentials) {
      axios({
        url : drf.accounts.signup2(),
        method : 'put',
        headers : getters.authHeader, 
        data : credentials,
      })
      .then( () => {
        dispatch()
      })
    },

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
          console.log(res)
          commit('SET_CURRENT_USER', res.data)
          localStorage.setItem('currentUser', res.data)
        })
        .catch( err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({name:'login'})
          }
        })
      }
    },
    fetchProfile ({ commit, getters }, { username }) {
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader
      })
      .then( res => {
        commit('SET_PROFILE', res.data)
        console.log(res)
      })
    }
  }
}