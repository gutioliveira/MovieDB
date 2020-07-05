import React, { useEffect } from 'react';
import {
    StyledView,
    ScrollView
} from './styles';

import { View } from 'react-native';

import SearchBar from '../../components/searchBar/index.js';
import {useDispatch, useSelector} from 'react-redux';

import { fetchGenres } from '../../config/store/actions/moviesActions';
import LoadingModal from '../../components/loadingModal';
import GenresList from '../../components/genresList';
import SearchList from '../../components/searchList';
import TrendingList from '../../components/trendingList';

export default function HomePage(props) {

    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, []);

    return (
        <StyledView>
            <SearchBar/>

            <View style={{flex: (searchString !== '' ? 1 : 0)}}>
                <SearchList/>
            </View>

            <View style={{flex: (searchString !== '' ? 0 : 1)}}>
                <ScrollView>
                    <TrendingList/>
                    <GenresList/>
                </ScrollView>
            </View>

            <LoadingModal/>
        </StyledView>
    );
}
