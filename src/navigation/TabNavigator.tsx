import React from 'react';
import { View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../config/colors';

const Tab = createBottomTabNavigator();

const TabNavigator: any = ({navigation}: {navigation: any}) => (
  <Tab.Navigator
    tabBarOptions={{
      adaptive: true,
      showLabel: false,
      style: {
        height: 56,

        position: 'absolute',
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30,
      },
      tabStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: config.NAVY_BLUE,
      },
    }}
    tabBar={props => (
      <View>
        <BottomTabBar {...props} />
      </View>
    )}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={MainStackNavigator}
      options={{
        tabBarIcon: ({size, focused}) => (
          <IconCommunity
            name={'truck-delivery'}
            size={size}
            color={focused ? config.FADED_BLUE : config.WHITE}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
