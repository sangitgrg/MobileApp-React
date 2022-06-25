// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar ,ImageBackground
} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log('App running')
  return (
    <ViewImageScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:600,
    height:600
  },
  image: {
    flex: 1
  },
  placeHolder: {
    
  }
});
