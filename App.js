// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet, Platform, StatusBar
} from 'react-native';
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {

  console.log('App running')
  return (
    <LoginScreen/>
  );
}
