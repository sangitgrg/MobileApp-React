import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={image} />
                        <View>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subtitle}>{subTitle}</AppText>
                        </View>
                    </View>
                </TouchableHighlight >
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium,
    }
})

export default ListItem;