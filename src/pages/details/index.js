import React from 'react';
import t from 'typy';
import {
    Poster,
    InfoContainer,
    ScrollView,
    Title,
    Text
} from './styles';
import { useSelector } from 'react-redux';
import urls from '../../config/constants/urls';
import strings from '../../config/constants/strings';

export default function DetailsPage({ navigation }) {

    const selectedMovie = useSelector(state => state.selectedMovie);

    return (
        <ScrollView>
            <Poster source={{uri: urls.imagesUrl + selectedMovie.poster_path}}/>
            <InfoContainer>
                <Title>
                    {strings('originalTitleLabel')}
                </Title>
                <Text>
                    {selectedMovie.original_title}
                </Text>
                {
                    t(selectedMovie.overview).safeString.length > 0 &&
                    <>
                        <Title>
                            {strings('descriptionLabel')}
                        </Title>
                        <Text>
                            {selectedMovie.overview}
                        </Text>
                    </>
                }
            </InfoContainer>
        </ScrollView>
    );
}
