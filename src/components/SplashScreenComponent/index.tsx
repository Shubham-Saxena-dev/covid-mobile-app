import React, {useEffect} from 'react';
import {View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Logo from '../atoms/Logo';
import BgImage from '../atoms/BgImage';

import styles from './SplashScreenComponent.styles';

const SplashScreenComponent = ({navigation}: {navigation: any}) => {
  const performTimeConsumingTask = () => {
    setTimeout(() => {
      navigation.dispatch(resetAction);
    }, 1500);
  };

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'App'}],
  });



  useEffect(() => {
    performTimeConsumingTask();
  }, []);

  return (
    <View style={styles.container}>
      <BgImage />
    </View>
  );
};

export default SplashScreenComponent;
