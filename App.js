// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Platform, StatusBar
} from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import MessageScreen from './app/screens/MessageScreen';

export default function App() {
  console.log('App running')
  return (
    <ListingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
    backgroundColor: '#f8f4f4',
    paddingTop: 100
  },
  image: {
    flex: 1
  },
  placeHolder: {

  }
});
