import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/Firebase';
import { useNavigation } from '@react-navigation/native';
import MainCardComponent from './HomeComponents/MainCardComponent';
import { HomeScreenProps } from './utils/types';

const ScreenHome = ({navigation}:HomeScreenProps) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser(dispatch);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
      <Text style={styles.header}>Let's browse</Text>
      <MainCardComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: 'grey',
    paddingLeft: 20,
  },
});

export default ScreenHome;
