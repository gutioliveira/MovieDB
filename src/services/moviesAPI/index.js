import { get } from './config';

export default {
    discover: {
        movie: (genreId) => get({url: '/discover/movie', extraParams: {with_genres: genreId}})
    },
    genres: {
        movie: () => get({url: '/genre/movie/list'})
    },
    search: {
        movie: (searchString) => get({url: '/search/movie', extraParams: {query: searchString}})
    },
    trending: {
        movie: (media_type = 'movie', time_window = 'week') => get({url: `/trending/${media_type}/${time_window}`})
    }
}

