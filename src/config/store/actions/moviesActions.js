import MoviesAPI from '../../../services/moviesAPI';

const MoviesActions =  {
    SET_SEARCH_STRING: 'SET_SEARCH_STRING',
    FETCH_TRENDING: 'FETCH_TRENDING',
    FETCH_TRENDING_SUCCESS: 'FETCH_TRENDING_SUCCESS',
    FETCH_TRENDING_ERROR: 'FETCH_TRENDING_ERROR',
    SEARCH_MOVIE: 'SEARCH_MOVIE',
    SEARCH_MOVIE_SUCCESS: 'SEARCH_MOVIE_SUCCESS',
    SEARCH_MOVIE_ERROR: 'SEARCH_MOVIE_ERROR',
    FETCH_GENRES: 'FETCH_GENRES',
    FETCH_GENRES_SUCCESS: 'FETCH_GENRES_SUCCESS',
    FETCH_GENRES_ERROR: 'FETCH_GENRES_ERROR',
    FETCH_MOVIES: 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
    SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE'
};

export const setSelectedMovie = (movie) => ({
    type: MoviesActions.SET_SELECTED_MOVIE,
    data: movie
});

export const setSearchStringThunk = (text, dispatch) => {
    dispatch({
        type: MoviesActions.SET_SEARCH_STRING,
        data: text
    });
};

export const searchMovie = (searchString) => {
    return function(dispatch){
        dispatch({
            type: MoviesActions.SEARCH_MOVIE
        });

        MoviesAPI.search.movie(searchString).then((res) => {
            dispatch({
                type: MoviesActions.SEARCH_MOVIE_SUCCESS,
                data: res
            });
        }).catch((err) => {
            dispatch({
                type: MoviesActions.SEARCH_MOVIE_ERROR
            });
        });
    };
};

export const fetchGenres = () => {
    return function(dispatch){
        dispatch({
            type: MoviesActions.FETCH_GENRES,
        });
        MoviesAPI.genres.movie().then((res) => {
            console.log('MoviesAPI.discover', res);
            dispatch({
                type: MoviesActions.FETCH_GENRES_SUCCESS,
                data: res
            })
        }).catch((err) => {
            dispatch({
                type: MoviesActions.FETCH_GENRES_ERROR,
                data: err
            })
        })
    }
};

export const fetchMovies = (genreId) => {
    return function(dispatch){
        dispatch({
            type: MoviesActions.FETCH_MOVIES,
            genreId
        });
        MoviesAPI.discover.movie(genreId).then((res) => {
            console.log('moveiera', res);
            // setTimeout(() =>
                dispatch({type: MoviesActions.FETCH_MOVIES_SUCCESS, data: res.results, genreId})
                // , 5000);
        }).catch((err) => {
            dispatch({type: MoviesActions.FETCH_MOVIES_ERROR, genreId, error: err});
        });
    }
};

export const fetchTrending = () => {
    return function(dispatch){
        dispatch({
            type: MoviesActions.FETCH_TRENDING
        });
        MoviesAPI.trending.movie().then((res) => {
            console.log('Trending', res);
            // setTimeout(() =>
            dispatch({type: MoviesActions.FETCH_TRENDING_SUCCESS, data: res.results})
            // , 5000);
        }).catch((err) => {
            console.log('Trending', err);
            dispatch({type: MoviesActions.FETCH_TRENDING_ERROR, error: err});
        });
    }
};

export default MoviesActions;
