import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';

import Screen from '../components/Screen';

const listings = [
    {
        id:1,
        title:'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id:2,
        title:'Couch in great condition',
        price: 1540,
        image: require('../assets/couch.jpg')
    }
]


function ListingScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={listings}
            keyExtractor={list=>list.id.toString()}
            renderItem={({item}) => 
            <AppCard 
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image} />
            }/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default ListingScreen;