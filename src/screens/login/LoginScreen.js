import React, { useLayoutEffect, useState} from 'react';
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
    navigation.setOptions({
     headerShown: false,
     });
   }, []);

return(

    <SafeAreaView>
        <Text>Login Screen</Text>
    </SafeAreaView>
);
}
export default LoginScreen