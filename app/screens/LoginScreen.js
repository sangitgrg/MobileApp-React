import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

import Screen from '../components/Screen';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppTextInput
                onChangeText={(em) => setEmail(em)}
                autoCorrect={false}
                autoCapitalize='none'
                icon='email'
                placeholder='Email' />
            <AppTextInput
                onChangeText={(psw) => setPassword(psw)}
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                placeholder='password'
                secureTextEntry
                textContentType='password'
            />
            <AppButton title='Login' onPress={() => console.log(email, password)} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;