import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import firebase from 'firebase';
import globalStyles from '../../styles/GlobalStyles';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={globalStyles.container}>
        <Text>Welcome to the User Home Screen!</Text>
        <Button title="Logout" onPress={() => { firebase.auth().signOut(); navigation.replace('Login'); }} />
      </SafeAreaView>
    );
  };
  
export default HomeScreen

