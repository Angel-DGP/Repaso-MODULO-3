import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestWebServices } from './screens/TestWebServices'; 
import { enableScreens } from 'react-native-screens';
import { PostForm } from './screens/PostForm';

enableScreens();

const StackProducts = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackProducts.Navigator initialRouteName='PostFormView'>
        <StackProducts.Screen
          name="TestWebServicesNav"
          component={TestWebServices}
        />
        <StackProducts.Screen 
          name='PostFormView'
          component={PostForm}
          options={{
            title:"MENSAJES"
          }}
        />
      </StackProducts.Navigator>
    </NavigationContainer>
  );
}
