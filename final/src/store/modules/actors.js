import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
    state:{
			actors: [],
			page: 0,
			actor : {},			
    },
    getters:{
			actors : state => state.actors,
			page : state => state.page,
			actor : state => state.actor
		},
    mutations:{},
    actions:{
			fetchActors ({ commit,getters }) {
				axios({
					url:drf.actors.actors(getters.page),
					method: 'get'
				})
				.then(res => {
					commit('FETCH_ACTORS', res.data)
					commit('')
				})
			}
		 }

}