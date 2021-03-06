import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './BgImage.styles';

const BgImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageGradient}
        source={require('./../../../assets/images/Gradient-BG.jpeg')}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <ImageBackground
        style={styles.image}
        
        source={require('./../../../assets/images/covid.jpeg')}
        resizeMode="cover"
      />
    </View>
  );
};

export default BgImage;
