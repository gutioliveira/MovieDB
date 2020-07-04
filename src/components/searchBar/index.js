import React from 'react';
import { View, TextInput } from 'react-native';
import { Container } from './styles';

export default function searchBar(props){

    const [text, setText] = React.useState('');
    const callOnSearchString = setTimeout(() => {
        props.onSearchString && props.onSearchString(text);
    }, 1000);

    return(
        <Container>
            <View style={{width: 20, height: 20, backgroundColor: 'black', marginRight: 10}}/>
            <TextInput
                value={text}
                onChangeText={(text) => {
                    setText(text);
                    clearInterval(callOnSearchString);
                }}
                placeholder={'Pesquise por título...'}
                style={{flex: 1}}/>
        </Container>
    )
}