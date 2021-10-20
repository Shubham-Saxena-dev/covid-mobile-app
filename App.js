import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
 
import {theme} from './src/config/theme';
import {AppRouter} from './src/navigation';


const Stack = createStackNavigator();


export default function App() {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true)

  
  
  return  (
    <PaperProvider theme={theme}>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
    </PaperProvider>

  )
}
