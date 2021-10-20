import React from 'react';
import {StyleSheet} from 'react-native';

import { useEffect } from 'react';
import { useFocusEffect} from '@react-navigation/native';

const Dashboard = ({navigation}: {navigation: any}) => {

  const getDashboard = async() => {
          navigation.navigate('HomeDashboard');
  }
 
  useEffect(()=>{
    getDashboard();
  },[])
  useFocusEffect(
    React.useCallback(() => {
      getDashboard();
    },[])
  )
  return (
    <>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Dashboard;
