import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import SingIn from '../pages/SingIn';
import ModelInitial from '../pages/Model_initial';
import SingUp from '../pages/SingIn copy';



const Stack = createNativeStackNavigator();

function RoutesConfig() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='initialRouter'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='singIn' component={SingIn} options={{headerShown: false}}/>
        <Stack.Screen name='initialRouter' component={ModelInitial} options={{headerShown: false}}/>
        <Stack.Screen name='singUp' component={SingUp} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesConfig;