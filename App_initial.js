// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, 
          TouchableHighlight, TouchableNativeFeedback, Button, Alert,Platform,StatusBar } from 'react-native';

export default function App() {
  let x = 1;
  console.log('App running')
  return (
    <View style={styles.container}>
      <Button title='Click Me'
         onPress={() => Alert.alert('My title', 'Button clicked', [
          { onPress: () => console.log('Yes'), text: "Yes" },
          { onPress: () => console.log('No'), text: 'No' }
        ])} />
    </View>

    // Image and Touch
    // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <TouchableNativeFeedback onPress={()=>console.log('image pressed.')}>
    //     <Image style={styles.imgCenter}
    //       fadeDuration={1000}
    //       source={{ uri: 'https://picsum.photos/200' }} />
    //       {/* <View style={{height:90, width: 200, backgroundColor:'dodgerblue'}}></View> */}
    //   </TouchableNativeFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    //Inital added code by default
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text> 
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgCenter: {
    width: 200,
    height: 200,
  }
});
