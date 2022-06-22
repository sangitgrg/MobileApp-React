// import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity,
    TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
    // console.log(useDimensions())
    // console.log(useDeviceOrientation())
    const {landscape} = useDeviceOrientation();
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: landscape ? "100%" : "30%"
            }}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imgCenter: {
        width: 200,
        height: 200,
    }
});
