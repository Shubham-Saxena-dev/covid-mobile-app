import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Image, View} from 'react-native';
import styles from './sidedrawer.styles';
import {Drawer} from 'react-native-paper';

import config from '../../config/colors';
import { SafeAreaView } from "react-native-safe-area-context";


const SideDrawer = ({ navigation }: { navigation: any }) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView 
        contentContainerStyle={{
          paddingTop:50
         }}
      >
        <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              activeBackgroundColor={config.LIGHT_GREY}
              style={styles.drawerItem}
              focused={true}
              icon={({color, size}) => (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../../assets/icons/favicon.png')}
                />
              )}
              label="SideDrawer"
              labelStyle={styles.drawerItemLabel}
              onPress={() => {
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default SideDrawer;
