import React , {useState} from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessage = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }]

function MessageScreen(props) {
    const [message,setMessage] = useState(initialMessage)
    const [refreshing, setRefreshing] = useState(false);
    
    const handleDelete = message_to_delete => {
        setMessage(message.filter(x=>x.id !== message_to_delete.id))
    }
    return (
        <Screen>
            <FlatList
                data={message}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log()}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={()=>handleDelete(item)}/>
                        } />
                }
                ItemSeparatorComponent={(ListItemSeperator)}
                refreshing={refreshing}
                onRefresh={()=> 
                setMessage(initialMessage)}
            />
        </Screen>
    );
}

export default MessageScreen;