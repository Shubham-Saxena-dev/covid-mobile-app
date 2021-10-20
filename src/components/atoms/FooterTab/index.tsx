import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './FooterTab.styles';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface FooterTab {
  navigation: any;
}

const FooterTab = ({
  navigation,

}: FooterTab) => {
  const [select, setselect] = useState(-1);


  return (
    <View style={styles.container}>
      <View style={styles.tabView}>
        <>
          <TouchableOpacity
            key={0}
            style={styles.iconView}
            onPress={() => {
              setselect(0);
              navigation.navigate('HomeDashboard');
            }}>

            <IconCommunity name={'home'} size={32} color={config.NAVY_BLUE} />
            <Text style={{fontSize:10}}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            key={1}
            onPress={() => {
              setselect(1);
            }}
            style={styles.iconView}>
            <IconCommunity name={'clipboard-list-outline'} color={config.NAVY_BLUE} size={32} />
            <Text style={{fontSize:10}}>Vaccines</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
            }}
          >
            <View style={styles.roundButton1}>
              <Ionicons
                name={'add'}
                size={25}
                color={config.WHITE}
                onPress={() => {
                  console.log("add button pressed")
                }}
                style={{ right: 3, bottom:3 }}
              />

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            key={2}
            onPress={() => {
              setselect(2);
            }}
            style={styles.iconView}>
            <IconCommunity name={'clipboard-list-outline'} color={config.NAVY_BLUE} size={32} />
            <Text style={{fontSize:10}}>Book Slot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={3}
            onPress={() => {
              navigation.navigate("More")
              setselect(3);
            }}
            style={styles.iconView}>
            <Ionicons
              name={'menu'}
              size={32}
              color={config.NAVY_BLUE}
            />
            <Text style={{fontSize:10}}>More</Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
};

export default FooterTab;
