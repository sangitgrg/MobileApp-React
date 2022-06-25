// import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, ImageBackground
} from 'react-native';

export default function WelcomeScreen() {
    console.log('App running')
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/background.jpg')} resizeMode='cover' >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                    <Text>Sell unwanted stuffs</Text>
                </View>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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
        top: 200,
        alignItems:'center'
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'green'
    }
});
