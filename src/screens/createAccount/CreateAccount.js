import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const CreateAccountScreen = () => {

    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <Text>Create Account Screen</Text>
        </SafeAreaView>
    )
}
export default CreateAccountScreen