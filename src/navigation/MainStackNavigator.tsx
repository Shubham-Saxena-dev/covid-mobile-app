import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Dashboard from '../screens/Dashboard/index';
import HomeDashboard from "../screens/Dashboard/HomeDashboard";

const Stack = createStackNavigator();

const MainStackNavigator: any = () => {
  return (
    <Stack.Navigator initialRouteName="HomeDashboard">
    
      <Stack.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    
      
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
