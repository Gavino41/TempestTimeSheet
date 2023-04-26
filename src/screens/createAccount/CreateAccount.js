import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const CreateAccountScreen = () => {

    const navigation = useNavigation();

    const handleCreateAccount = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message) )
    }
    return(
        <SafeAreaView>
            <Text>Create Account Screen</Text>
        </SafeAreaView>
    )
}
export default CreateAccountScreen