import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import SignupMoreView from '@/views/SignupMoreView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import RecommendMovieView from '@/views/RecommendMovieView'
import ActorListView from '@/views/ActorListView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/signup2/:username',
    name: 'signup2',
    component: SignupMoreView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/detail/:movieId',
    name: 'moviedetail',
    component: MovieDetailView
  },
  {
    path: '/recommend/:username',
    name: 'recommend',
    component: RecommendMovieView
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorListView
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
