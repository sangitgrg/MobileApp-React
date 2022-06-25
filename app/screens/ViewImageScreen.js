import { StyleSheet, View, Image, Platform, StatusBar } from 'react-native';
import colors from '../config/colors'

export default function ViewImageScreen() {
    console.log('App running')
    return (
        <View style={styles.container}>
            <View style={styles.close}></View>
            <View style={styles.delete}></View>
            <Image style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode='contain' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:'grey'
    },
    close: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        position:'absolute',
        top:40,
        left:30
    },
    delete: {
        backgroundColor: colors.secondary,
        height: 50,
        width: 50,
        position:'absolute',
        position:'absolute',
        top:40,
        right:30
    },
    image: {
        width: '100%',
        height: '100%'
    }

});
