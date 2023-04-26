import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/LoginScreen'
import CreateAccountScreen from './src/screens/createAccount/CreateAccount';
import ForgotPassScreen from './src/screens/forgotPassword/ForgotPassword';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;