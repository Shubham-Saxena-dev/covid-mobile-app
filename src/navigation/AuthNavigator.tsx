import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  SplashScreenComponent  from '../components/SplashScreenComponent';
import HomeDashboard from "../screens/Dashboard/HomeDashboard";

const Stack  = createStackNavigator();


const AuthNavigator: any = () => (
    
   <Stack.Navigator initialRouteName= 'SplashScreenComponent'>
    <Stack.Screen 
      name="Splash" 
      component={SplashScreenComponent} 
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen 
      name="HomeDashboard" 
      component={HomeDashboard} 
      options={{
        headerShown: false,
      }}
    />
    
  </Stack.Navigator>
  );
  
  export default AuthNavigator;
  