import React, { useEffect } from 'react';
import {fetchGenres} from '../../config/store/actions/moviesActions';
import {useDispatch, useSelector} from 'react-redux';

import { Container, Title, GenreMovie, View } from './styles';
import MovieList from '../moviesList';
import strings from '../../config/constants/strings';


export default function GenresList(){

    const genres = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, []);

    return(
        <Container>
            <Title>
                {strings('genresLabel')}
            </Title>

            {
                genres.map((item) => {
                    return(
                        <View key={item.name}>
                            <GenreMovie>
                                {item.name}
                            </GenreMovie>
                            <MovieList genreId={item.id}/>
                        </View>
                    )
                })
            }
        </Container>
    )
}
