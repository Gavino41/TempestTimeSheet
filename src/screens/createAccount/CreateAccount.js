import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { auth } from '../../Firebase/Index';
import globalStyles from '../../styles/GlobalStyles';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';

const CreateAccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleCreateAccount = () => {
    if (password === password2) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch(error => alert(error.message));
    } else {
      alert("Passwords don't match");
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={globalStyles.container}>
        <Image style={styles.logo} source={Logo} />
        <ScrollView contentContainerStyle={styles.scrollView}>
        <CustomInput
          label="Name"
          placeholder="Enter your Name"
          value={name}
          onChangeText={text => setName(text)}
        />
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
        <CustomInput
          label="Confirm Password"
          placeholder="Re-enter your password"
          value={password2}
          onChangeText={text => setPassword2(text)}
          secureTextEntry={true}
        />
        <CustomInput
          label="Role"
          placeholder="User or Admin"
          value={role}
          onChangeText={text => setRole(text)}
        />
      </ScrollView>
        <Pressable style={globalStyles.button} onPress={handleCreateAccount}>
          <Text style={globalStyles.buttonText}>Create Account</Text>
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
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
});

export default CreateAccountScreen;