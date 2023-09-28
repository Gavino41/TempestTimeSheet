import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import globalStyles from '../../styles/GlobalStyles';
import TotalHoursService from '../../services/TotalHoursService';
import 'firebase/firestore';

const HomeScreen = () => {
  const currentUser = firebase.auth().currentUser;
  const navigation = useNavigation();
  const [userHours, setUserHours] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    if (currentUser) {
      // Fetch user total hours and set them in state
      TotalHoursService.getUserTotalHours(currentUser.uid)
        .then((hours) => {
          if (hours !== undefined && typeof hours === 'object') {
            setUserHours(hours); // If hours is an object, set it in state
          } else {
            console.error('Invalid user total hours data:', hours);
            // Handle the case when hours is undefined or not an object
          }
        })
        .catch((error) => {
          console.error('Error fetching user total hours:', error);
        });
    }
    
  }, [navigation, currentUser]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Welcome to the User Home Screen!</Text>
      {userHours !== null && (
        <View>
          <Text>User Total Hours:</Text>
          {Object.keys(userHours).map((date) => (
            <Text key={date}>{date}: {userHours[date]}</Text>
          ))}
        </View>
      )}
      <Button
        title="Logout"
        onPress={() => {
          firebase.auth().signOut();
          navigation.replace('Login'); // Navigate to the Login screen
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;


