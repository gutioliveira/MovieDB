import actions from '../actions/moviesActions';

const INITIAL_STATE = {
    searchString: '',
    moviesSearched: {results: []},
    trending: [],
    selectedMovie: {},
    movies: {},
    moviesLoading: {},
    moviesError: {},
    genres: [],
    genresError: '',
    loading: false,
    fetchingMovies: false,
    fetchingGenres: false,
    fetchingTrending: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.FETCH_TRENDING_SUCCESS:
            return {
                ...state,
                trending: action.data
            };
        case actions.SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.data
            };
        case actions.SET_SEARCH_STRING:
            if (action.data === ''){
                state.moviesSearched = INITIAL_STATE.moviesSearched;
            }
            return {
                ...state,
                searchString: action.data
            };
        case actions.SEARCH_MOVIE:
            return {
                ...state,
                loading: true
            };
        case actions.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                moviesSearched: action.data,
                loading: false
            };
        case actions.FETCH_GENRES:
            return {
                ...state,
                fetchingGenres: true
            };
        case actions.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                fetchingGenres: false,
                genres: action.data.genres
            };
        case actions.FETCH_GENRES_ERROR:
            return {
                ...state,
                fetchingGenres: false,
                genresError: action.data.message
            };
        case actions.FETCH_MOVIES:
            state.moviesLoading[action.genreId] = true;
            return {
                ...state,
            };
        case actions.FETCH_MOVIES_SUCCESS:
            state.moviesLoading[action.genreId] = false;
            state.movies[action.genreId] = action.data;
            return {
                ...state,
            };
        case actions.FETCH_MOVIES_ERROR:
            state.moviesLoading[action.genreId] = false;
            state.moviesError[action.genreId] = false;
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
