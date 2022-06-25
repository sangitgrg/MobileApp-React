// import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, ImageBackground
} from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
    console.log('App running')
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}
                resizeMode='cover' blurRadius={4} >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                    <Text style={styles.text}>Sell What You Don't need</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" color='primary' />
                    <AppButton title="Register" color='secondary' />
                </View>
                {/* <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View> */}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 15
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    backGround: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600',
        fontSize: 25,
        paddingVertical:20
    }
});
