import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TextInput } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { searchMovie, setSearchStringThunk } from '../../config/store/actions/moviesActions';
import strings from '../../config/constants/strings';

const ICON_COLOR = "#000";

let delay;

export default function searchBar(props){

    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    const callOnSearchString = () => {
        clearTimeout(delay);
        delay = setTimeout(() => {
            dispatch(searchMovie(searchString));
        }, 1000);
    };

    const setText = (text) => {
        setSearchStringThunk(text, dispatch);
    };

    const onChangeText = (text) => {
        setText(text);
        callOnSearchString();
    };

    return(
        <Container>
            <Icon name="search" size={30} color={ICON_COLOR} />
            <TextInput
                value={searchString}
                onChangeText={onChangeText}
                placeholder={strings('searchStringPlaceHolder')}
                style={{flex: 1}}/>
            <Icon
                onPress={() => {searchString.length > 0 && setText('')}}
                name="close" size={30} color={searchString.length > 0 ? ICON_COLOR : 'transparent'} />
        </Container>
    )
}
