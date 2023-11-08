import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  
  const handleLogin = () => {
    // Handle authentication and navigate to the Home screen on successful login
    // For this example, we'll directly navigate to the Home screen
    navigation.navigate('Emoji', { navigation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text> 
      <Button title="Go to Emoji" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default LoginScreen;