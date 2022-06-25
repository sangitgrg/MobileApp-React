// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, ImageBackground
} from 'react-native';
import { Button } from 'react-native-web';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';

export default function App() {
  console.log('App running')
  return (
    // <View style={styles.container}>
    //   <AppCard title="Red jacked for sale!" subTitle='$100' image={require('./app/assets/jacket.jpg')} />
    // </View>
    // <AppText>This is from reusable component</AppText>
    <ViewImageScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+20 : 0,
    backgroundColor:'#f8f4f4',
    paddingTop:100
  },
  image: {
    flex: 1
  },
  placeHolder: {

  }
});
