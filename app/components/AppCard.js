import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function AppCard({ title, subTitle, image }) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
                <AppText style={styles.textSubTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 15,
        overflow:'hidden'
    },
    image: {
        padding:20,
        width: '100%',
        height: 200
    },
    textContainer: {
        padding: 10
    },
    textTitle:{
        fontWeight:'bold'
    },
    textSubTitle:{
        color:colors.secondary
    }
})

export default AppCard;