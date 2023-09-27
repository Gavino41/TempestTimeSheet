import React from 'react';
import BottomTabNavigator from '../../components/BottomTabNav';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserHomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return <BottomTabNavigator />;
};

export default UserHomeScreen;
