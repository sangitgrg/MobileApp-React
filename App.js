// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
    // console.log(useDimensions())
    // console.log(useDeviceOrientation())
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor:'grey',
                width:100,
                height:100
            }}/>
            <View style={{
                backgroundColor:'gold',
                width:100,
                height:100,
                bottom:30,
                right:40
            }}/>
            <View style={{
                backgroundColor:'tomato',
                width:100,
                height:100 
            }}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCenter: {
        width: 200,
        height: 200,
    }
});
