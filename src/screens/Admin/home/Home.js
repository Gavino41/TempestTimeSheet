import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';


const AdminHomeScreen = () => {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView>
        <Text>Welcome to the Admin Home Screen!</Text>
        <Button title="Logout" onPress={() => { firebase.auth().signOut(); navigation.navigate('Login'); }} />
      </SafeAreaView>
    );
  };
  
export default AdminHomeScreen