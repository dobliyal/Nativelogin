import React, { useEffect } from 'react';
import { View, Text, BackHandler, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { logout } from '../../Redux/userSlice';
import { HomeScreenProps, User } from './utils/types';
import { styles } from './ScreenHomeStyles';
import { storage } from '../../assets/storage';

function ScreenHome({ navigation }: HomeScreenProps) {
  const storedUserString = storage.getString('user') || '{}';
  const storedUser: User = JSON.parse(storedUserString);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      if (isLoggedIn) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{storedUser.username}, Welcome to Home Screen!</Text>
      <View style={styles.button}>
      <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}

export default ScreenHome;
