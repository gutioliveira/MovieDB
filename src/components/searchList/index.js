import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import urls from '../../config/constants/urls';
import { setSelectedMovie } from '../../config/store/actions/moviesActions';
import routes from '../../config/constants/routes';
import { TouchableWithoutFeedback, ImageContainer, Image, ScrollView, Text } from './styles';

export default function SearchList(props){

    const moviesSearched = useSelector(state => state.moviesSearched);
    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    if (moviesSearched.results.length === 0){
        return null;
    }

    return(
        <ScrollView>
            {
                searchString && moviesSearched.results.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback key={item.poster_path + index} onPress={() => {
                            dispatch(setSelectedMovie(item));
                            navigation.navigate(routes.details);
                        }}>
                            <ImageContainer>
                                <Image
                                    source={{uri: urls.imagesUrl + item.poster_path}}>
                                </Image>
                                <Text>
                                    {item.title}
                                </Text>
                            </ImageContainer>
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </ScrollView>
    )
}
