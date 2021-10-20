import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import styles from './Logo.styles';

const Logo = ({ size }) => {
  const logoImage =
    size === 'half'
      ? require('./../../../assets/images/metro.png')
      : size === 'quarter'
      ? require('./../../../assets/images/metro.png')
      : require('./../../../assets/images/metro.png');

  return (
    <View
      style={[
        styles.container,
        size === 'half'
          ? styles.halfScreen
          : size === 'quarter'
          ? styles.quarterScreen
          : styles.empty,
      ]}
    >
      <View
        style={[
          styles.fullScreenImage,
          size === 'half'
            ? styles.halfScreenImage
            : size === 'quarter'
            ? styles.quarterScreenImage
            : styles.empty,
        ]}
      >
        <ImageBackground
          style={styles.imageBg}
          source={require('./../../../assets/images/metro.png')}
        />
        <Image
          style={[
            size === 'half'
              ? styles.imageMD
              : size === 'quarter'
              ? styles.imageSM
              : styles.imageLG,
          ]}
          source={logoImage}
        />
      </View>
    </View>
  );
};

export default Logo;
