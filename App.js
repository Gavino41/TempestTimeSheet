import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/LoginScreen'
import CreateAccountScreen from './src/screens/createAccount/CreateAccount';
import ForgotPassScreen from './src/screens/forgotPassword/ForgotPassword';
import AdminHomeScreen from './src/screens/Admin/home/Home';
import UserHomeScreen from './src/screens/home/Index';
import HomeScreen from './src/screens/home/HomeScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        <Stack.Screen name="UserHome" component={UserHomeScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;