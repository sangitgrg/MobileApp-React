import { StyleSheet, View, Image, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function ViewImageScreen() {
    console.log('App running')
    return (
        <View style={styles.container}>
            <View style={styles.close}>
                <MaterialCommunityIcons name='close' size={35} color='white'/>
            </View>
            <View style={styles.delete}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color='white' />
            </View>
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
        backgroundColor: 'black'
    },
    close: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    delete: {
        position: 'absolute',
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }

});
