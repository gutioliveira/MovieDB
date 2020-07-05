import React, { useEffect } from 'react';
import {fetchTrending} from '../../config/store/actions/moviesActions';
import {useDispatch, useSelector} from 'react-redux';

import { Container, Title, View } from './styles';
import MovieList from '../moviesList';
import strings from '../../config/constants/strings';


export default function TrendingList(){

    const trending = useSelector(state => state.trending);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending());
    }, []);

    return(
        <Container>
            <Title>
                {strings('trending')}
            </Title>

            <MovieList list={trending}/>

        </Container>
    )
}
