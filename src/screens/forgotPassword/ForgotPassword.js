import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import globalStyles from '../../styles/GlobalStyles';
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput';
import { auth } from '../../Firebase/Index';
import { useNavigation } from '@react-navigation/native';

const ForgotPassScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const handleForgotPass = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset email has been sent");
      navigation.replace('Login')
    } catch (error) {
      alert(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      <CustomInput
        label="Email"
        placeholder="Enter your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Pressable style={globalStyles.button} onPress={handleForgotPass}>
        <Text style={globalStyles.buttonText}>Create New Password</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginRight: '5%',
    marginTop: '10%',
    height: '35%',
    width: '100%',
  }
})

export default ForgotPassScreen;