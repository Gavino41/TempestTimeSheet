import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingBottom: 50,
 
    
  },
  text: {
    color: '#eee',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    
  },
  buttonText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#333',
    color: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#eee',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#eee'
  },
  LogoutButton: {
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
}
}
);

export default globalStyles;