import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import globalStyles from '../styles/global.styles';

const CustomInput = ({ label, placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.label}>{label}</Text>
      <TextInput
        style={globalStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '85%'
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 5,
    padding: 8,
  },
});

export default CustomInput;