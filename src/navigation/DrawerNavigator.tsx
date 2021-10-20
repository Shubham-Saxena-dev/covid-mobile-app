import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideDrawer from '../components/SideDrawer';
import HomeDashboard from "../screens/Dashboard/HomeDashboard";
import Dashboard from "../screens/Dashboard/index";
import More from "../screens/More/More";

const Drawer = createDrawerNavigator();

const DrawerNavigator: any = ({navigation}: {navigation: any}) => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawer {...props} />}
    initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="HomeDashboard" component={HomeDashboard} />
    <Drawer.Screen name="More" component={More} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
