import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import movies from './modules/movies'
import actors from './modules/actors'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { accounts, movies, actors }
})