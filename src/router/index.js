import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '@/components/MovieList'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: SearchMovie
        },
        {
            path: '/MovieList/:name',
            name: 'MovieList',
            props: true,
            component: MovieList
        },
        {
            path: '/movie/:id',
            name: 'Movie',
            props: true,
            component: Movie
        },
    ],
    mode: 'history'
})