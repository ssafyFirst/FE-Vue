import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    token : localStorage.getItem('token') || '',
    currentUser: {}

  },
  getters:{
    isLoggedIn : state => !!state.token,
    authHeader  (state) {
      return {Authorization: `Token ${state.token}`}
    },

    
  },
  mutations:{
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CURRENT_USER : (state, user) => state.currentUser = user,
    
  },
  actions:{
    saveToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    removeToken ({ commit }) {
      commit('SET_TOKEN', '')
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
        })
        .catch( err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({name:'login'})
          }
        })
      }
    }
  }
}