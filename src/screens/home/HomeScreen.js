import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { auth } from '../../Firebase/Index';


const UserHomeScreen = () => {
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
  
export default UserHomeScreen