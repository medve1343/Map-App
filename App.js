import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as AuthProvider} from './context/AuthContext';
import EmojiScreen from './EmojiScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignupScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Emoji" component={EmojiScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Map" component={MapScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;