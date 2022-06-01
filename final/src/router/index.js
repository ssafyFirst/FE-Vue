import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import SignupMoreView from '@/views/SignupMoreView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import RecommendMovieView from '@/views/RecommendMovieView.vue'
// import ActorListView from '@/views/ActorListView'
import ActorDetailView from '@/views/ActorDetailView'
import SearchMovieView from '@/views/SearchMovieView.vue'

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
  // {
  //   path: '/actors',
  //   name: 'actors',
  //   component: ActorListView
  // },
  {
    path: '/actor/:actorId',
    name: 'actordetail',
    component: ActorDetailView
  },
  {
    path: '/search/:keyword',
    name: 'search',
    component: SearchMovieView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 이전 페이지에서 발생한 에러메시지 삭제
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  const noAuthPages = ['login', 'signup']

  const isAuthRequired = !noAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('Require Login. Redirecting..')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'home' })
  }
})

export default router
