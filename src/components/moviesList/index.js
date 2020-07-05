import React, { useEffect } from 'react';
import t from 'typy';
import {fetchMovies} from '../../config/store/actions/moviesActions';
import {useDispatch, useSelector} from 'react-redux';

import { Container, ActivityIndicator, ScrollView} from './styles';
import MovieCard from '../movieCard';


export default function MovieList(props){

    const loading = props.loading || useSelector(state => state.moviesLoading[props.genreId]);
    const movies = props.list || useSelector(state => state.movies[props.genreId]);
    const dispatch = useDispatch();

    useEffect(() => {
        props.genreId && dispatch(fetchMovies(props.genreId));
    }, []);

    return(
        <Container>
            {
                loading ?
                    <ActivityIndicator/>
                    :
                    <ScrollView horizontal>
                        {
                            t(movies).safeArray.map((item, index) => {
                                return(
                                    <MovieCard key={'MovieList' + item.poster_path} item={item}/>
                                )
                            })
                        }
                    </ScrollView>
            }
        </Container>
    )
}
