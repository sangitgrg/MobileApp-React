import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title,color,onPress }) {
    return (
            <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        // <View style={styles.container}>
        // </View>
        /* <Button styles={styles.button}
                title={children}>
        </Button> */
    );
}

const styles = StyleSheet.create({
    button: {
        padding:15,
        margin:5,
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase'
    }

})

export default AppButton;