import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png';
import globalStyles from '../../styles/GlobalStyles';
import CustomInput from '../../components/CustomInput';
import { auth } from '../../Firebase/Index';
import firebase from 'firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const firestore = firebase.firestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              const userData = doc.data();
              if (userData.role === 'User') {
                console.log('navigating user home');
                navigation.replace('Home');
              } else if (userData.role === 'Admin') {
                console.log('navigating admin home');
                navigation.replace('AdminHome');
              }
              else{
                console.log('not user or admin');
              }
            }
            else {
              console.log('not doc found')
            }
          })
          .catch(error => console.log(error));
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.uid);
      })
      .catch(error => alert(error.message));
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const handleForgotPass = () => {
    navigation.navigate('ForgotPass');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image style={styles.logo} source={Logo} />
      <CustomInput
        label="Email"
        placeholder="Enter your Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Pressable style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.forgotPassButton} onPress={handleForgotPass}>
        <Text style={styles.forgotPassText}>Forgot Password</Text>
      </Pressable>

      <Pressable style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Don't have an account? Create one!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  forgotPassButton: {
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  forgotPassText: {
    color: '#eee',
    fontSize: 10,
    fontWeight: 'bold',
  },
  createAccountButton: {
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#eee',
    fontSize: 10,
    fontWeight: 'bold',
  },
  logo: {
    marginRight: '5%',
    marginTop: '10%',
    height: '35%',
    width: '100%',
  },
});

export default LoginScreen;