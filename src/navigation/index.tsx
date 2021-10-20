import {createSwitchNavigator} from '@react-navigation/compat';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';



export const AppRouter = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: DrawerNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);
