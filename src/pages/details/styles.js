import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width - 30;

import styled from 'styled-components/native'

export const MainContainer = styled.View`
  background-color: white;
  flex: 1;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
  padding: 10px;
`;

export const Poster = styled.Image`
  height: ${width * 1.5}px;
  width: ${width}px;
  background-color: grey;
`;

export const ScrollView = styled.ScrollView.attrs(props => ({
    contentContainerStyle: {
        paddingBottom: 20,
        alignItems: 'center'
    }
}))`
    flex: 1;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    margin-vertical: 5px;
`;

export const Text = styled.Text`
    font-size: 12px;
`;
