const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMENTS = 'comments/'
const MOVIE = 'movie/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  movies: {
    // /articles/
    movies: (page) => HOST + MOVIES + `${page}`,
    // /articles/1/
    movie: moviePk => HOST + MOVIE + `${moviePk}/`,
    likeArticle: moviePk => HOST + MOVIE + `${moviePk}/` + 'like/',
    comments: moviePk => HOST + MOVIE + `${moviePk}/` + COMMENTS,
    comment: (moviePk, commentPk) =>
      HOST + MOVIE + `${moviePk}/` + COMMENTS + `${commentPk}/`,
  },
}
