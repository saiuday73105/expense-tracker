import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AddCategory = () => {

    return (
        <View style={styles.container}>
            <Text>Done By</Text>
            <Text>GVN Sai Uday</Text>
            <Text>Thota Sasanth</Text>
            <StatusBar style="auto" />
       </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddCategory;