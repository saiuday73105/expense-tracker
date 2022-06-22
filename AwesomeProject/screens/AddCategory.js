import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import {Icon} from 'react-native-vector-icons';

const AddCategory = () => {

    return (
      //   <View style={styles.container}>
      //     <Image
      //       source={{uri: 'https://cdn-icons-png.flaticon.com/128/4484/4484916.png'}}
      //       style={{width: 20, height: 20}}
      //     />
      //  </View>
       <View style={styles1.searchSection}>
          <Image
             source={{uri: 'https://cdn-icons-png.flaticon.com/128/4484/4484916.png'}}
             style={{width: 25, height: 25}}
           />
        <TextInput
          style={styles1.input}
          placeholder="User Nickname"
          underlineColorAndroid="transparent"
        />
      </View>
    )
}

const styles1 = StyleSheet.create({
  searchSection: {
    marginTop: 25,
    borderWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: '#fff',
    color: '#424242',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddCategory;