

const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMENTS = 'comments/'
const MOVIE = 'movies/'
const GENRES = 'genres/'
const ACTOR = 'actors/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    signup2: (username) => HOST + ACCOUNTS + 'signup2/' + username + '/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username + '/',
  },
  movies: {
    // /articles/
    movies: (page) => HOST + MOVIES + `${page}`,
    // /articles/1/
    movie: moviePk => HOST + MOVIES + `${moviePk}/`+ 'detail/',
    likeMovie: moviePk => HOST + MOVIE + `${moviePk}/` + 'like/',
    comments: moviePk => HOST + MOVIE + `${moviePk}/` + COMMENTS,
    comment: (moviePk, commentPk) =>
      HOST + MOVIE + `${moviePk}/` + COMMENTS + `${commentPk}/`,
    genres: () => HOST + MOVIE + GENRES,
    recommend : (username) => HOST + MOVIE + 'recommendation/' +`${username}/`,
    actormovie : (moviePk) => HOST + MOVIE + 'actor/' + `${moviePk}/`,
    LikeGenres : (genrePk) => HOST + MOVIE + `${genrePk}/`,
    sortmovies : (keyword, page) => HOST + MOVIE + 'sort/' + `${keyword}/` + `${page}/`,
    sortmovies2 : (keyword, page) => HOST + MOVIE + 'sort/' + `${keyword}/` + `${page}/` + '2/',
    search : (keyword) => HOST + MOVIE + 'search/' + `${keyword}/`,
    searchsort : (keyword, sort) => HOST + MOVIE + 'search/' + `${keyword}/` + `${sort}/`,
    nosearch : () => HOST + MOVIE + 'search/'

  },
  actors : {
    actors : (page) => HOST + ACTOR + `${page}/`,
    movieactor : (actorPk) => HOST + ACTOR + `${actorPk}/`,
    actor : (actorPk) => HOST + ACTOR + `${actorPk}/` + 'detail/',
    
  }
}
