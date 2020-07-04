import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './src/config/constants/routes';

import HomePage from './src/pages/home/index';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.home} component={HomePage} />
                <Stack.Screen name={Routes.details} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;