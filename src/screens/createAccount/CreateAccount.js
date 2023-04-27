import React, { useLayoutEffect, useState} from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { auth } from '../../Firebase/Index';
import globalStyles from '../../styles/GlobalStyles';
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput';

const CreateAccountScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCreateAccount = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email)
    })
    .catch(error => alert(error.message) )
  }


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
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
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
  }
})

export default CreateAccountScreen;