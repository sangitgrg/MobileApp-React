import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

import AppText from "../components/AppText";
import PickerItem from './PickerItem';

const handlePickerItemPress = (item) => {
    console.log(item)
}

function AppPicker({ placeholder, items, icon, selectedItem, onSelectItem }) {
    const [modalVisible, setModalVisible] = useState(false)


    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon} />}
                    <AppText style={styles.text} >{selectedItem ? selectedItem.label : placeholder }</AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button title='Close' onPress={() => setModalVisible(false)} />
                <FlatList data={items}
                    keyExtractor={x => x.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem label={item.label} onPress={() => { onSelectItem(item); setModalVisible(false) }} />
                    } />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        paddingTop: 5
    },
    text: {
        flex: 1
    }
})
export default AppPicker;