import React from 'react';
import {
    StyledView,
    StyledText
} from './styles';
import Routes from "../../config/constants/routes";

import SearchBar from '../../components/searchBar/index.js';

export default function HomePage({ navigation }) {
    return (
        <StyledView>
            <SearchBar onSearchString={() => {
                console.log('onSearchString');
            }} />
            <StyledText onPress={() => navigation.navigate(Routes.details)}>
                {"Detalhes"}
            </StyledText>
        </StyledView>
    );
}