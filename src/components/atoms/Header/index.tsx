import React, {useRef} from 'react';

import {Appbar} from 'react-native-paper';

import config from '../../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  title: any;
  navigation: any;
}
const Header = ({title, navigation}: HeaderProps) => {
  const menu: any = useRef();

  return (
    <>
      <Appbar.Header
        statusBarHeight={30}
        style={{
          backgroundColor: config.NAVY_BLUE,
          paddingRight: 0,
          marginRight: 0,
        }}>
        <Icon
          name="menu"
          color={config.WHITE}
          size={20}
          style={{marginRight: 10,marginLeft:8, marginTop: -5}}
          onPress={() => {
           navigation.openDrawer();  
        }}
        />

        <Appbar.Content
          title={title}
          titleStyle={{
            fontSize: 18,
            marginLeft: 100,
            marginTop: -5,
            alignItems: 'center',
            fontFamily: 'Poppins',
          }}
        />
        
      </Appbar.Header>
    </>
  );
};

export default Header;
