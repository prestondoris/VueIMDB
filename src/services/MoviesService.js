import omdb from '@/services/Api'

export default {
  fetchMovies (queryParams) {
    return omdb().get(queryParams)
  },
  getMovie (queryParams) {
    return omdb().get(queryParams)
  }
}