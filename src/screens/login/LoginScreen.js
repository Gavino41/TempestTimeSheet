import React, { useLayoutEffect, useState} from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png'
import globalStyles from '../../styles/GlobalStyles'
import CustomInput from '../../components/CustomInput'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = async() => {
        //TODO 
      };
    
        const handleCreateAccount = () => {
          navigation.navigate('CreateAccount')
        }
    
      const handleForgotPass = () =>{
        navigation.navigate('ForgotPass')
      } 

    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown: false,
         });
     }, []);

return(

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
      <Pressable style={globalStyles.button} onPress={handleLogin}>
      <Text style={globalStyles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.forgotPassButton} onPress={handleForgotPass}>
        <Text style={styles.forgotPassText}>Forgot Password</Text>
      </Pressable>

      <Pressable style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.forgotPassText}>Dont have an account? Create one!</Text>
      </Pressable>
    </SafeAreaView>
);
}
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
      alignItems: 'center'
    },
    logo: {
      marginTop: '10%',
      height: '35%',
      width: '100%',
    }
  })
export default LoginScreen