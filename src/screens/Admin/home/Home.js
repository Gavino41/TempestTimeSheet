import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import firebase from 'firebase';


const AdminHomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
  
    return (
      <SafeAreaView>
        <Text>Welcome to the Admin Home Screen!</Text>
        <Button title="Logout" onPress={() => { firebase.auth().signOut(); navigation.replace('Login'); }} />
      </SafeAreaView>
    );
  };
  
export default AdminHomeScreen