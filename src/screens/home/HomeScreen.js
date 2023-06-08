import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
  
    return (
      <SafeAreaView>
        <Text>Welcome to the User Home Screen!</Text>
        <Button title="Logout" onPress={() => { firebase.auth().signOut(); navigation.replace('Login'); }} />
      </SafeAreaView>
    );
  };

export default HomeScreen;

