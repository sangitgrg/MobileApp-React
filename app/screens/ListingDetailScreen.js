import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
               <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/mosh.jpg')}
                    title='Sangit Gurung'
                    subTitle='5 Listings' />
               </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailContainer: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight : '600'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10
    },
    userContainer:{
        marginVertical:20
    }
})

export default ListingDetailScreen; 