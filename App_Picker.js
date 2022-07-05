// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet, Platform, StatusBar, TextInput, Text, Switch
} from 'react-native';
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from './app/components/Screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState();

  console.log('App running')
  return (
    <Screen>
      <AppPicker
        selectedItem = {category}
        onSelectItem = {item=> setCategory(item)}
        items={categories} icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
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
