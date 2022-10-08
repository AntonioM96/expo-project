import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
// import 'bootstrap/dist/css/bootstrap.min.css'; NOT SUPPORTED BY react-native !!!
// import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homepage} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;