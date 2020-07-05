import React from 'react';
import { useNavigation } from '@react-navigation/native';
import urls from '../../config/constants/urls';
import routes from '../../config/constants/routes';

import { TouchableWithoutFeedback, ImageContainer, Thumbnail } from './styles';

import { setSelectedMovie } from '../../config/store/actions/moviesActions';
import { useDispatch } from 'react-redux';

export default function MovieCard(props){

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return(
        <TouchableWithoutFeedback onPress={() => {
            console.log('SET_SELECTED', props.item);
            dispatch(setSelectedMovie(props.item));
            navigation.navigate(routes.details);
        }}>
            <ImageContainer>
                <Thumbnail source={{uri: urls.imagesUrl + props.item.poster_path}}/>
            </ImageContainer>
        </TouchableWithoutFeedback>
    )
}
