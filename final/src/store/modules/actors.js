// import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
	state:{
		actors: [],
		page: 0,
		actor : {},	
		actormovie : []		
	},
	getters:{
		actors : state => state.actors,
		page : state => state.page,
		actor : state => state.actor,
		actormovie : state => state.actormovie
	},
	mutations:{
		SET_ACTOR : (state, actor) => state.actor = actor,
		SET_ACTOR_MOVIE : (state, movies) => state.actormovie = movies
	},
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
		},
		fetchActor ({ dispatch, getters, commit }, actorId) {
			axios({
				url: drf.actors.actor(actorId),
				method: 'get',
				headers: getters.authHeader
			})
			.then( res => {
				commit('SET_ACTOR', res.data)
				const movies = [
					res.data.movie1,
					res.data.movie2,
					res.data.movie3,
				]
				
				dispatch('fetchActorMovie', movies)	
			})
			.catch( err => console.error(err) )
		},
		fetchActorMovie ({ commit, getters }, movies) {
			let newmovies = []
			movies.forEach( movie => {
				axios({
					url:drf.movies.actormovie(movie),
					method:'get',
					headers: getters.authHeader
				})
				.then( res => {
					newmovies.push(res.data)
				})
				.catch( err => {
          if (err.response.status === 404) {
            console.log('!!')
          }
        })
			})
			commit('SET_ACTOR_MOVIE', newmovies)
		}

	},
}