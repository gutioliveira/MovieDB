import HomePage from '../../pages/home';
import DetailsPage from '../../pages/details';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import RouteNames from '../constants/routes';

const Stack = createStackNavigator();

export default function Routes(){

    const selectedMovie = useSelector(state => state.selectedMovie);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={RouteNames.home} component={HomePage} />
                <Stack.Screen name={RouteNames.details} options={{ title: selectedMovie.title }} component={DetailsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
