// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Done By</Text>
//       <Text>GVN Sai Uday</Text>
//       <Text>Thota Sasanth</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Home, AddExpense, AboutUs, AddNewIncome, TransactionHistory } from "./screens/";
// import AboutUs from "./screens/AboutUs";
// import { AddExpense } from "./screens/";

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddExpense" component={AddExpense} />
          <Stack.Screen name="AddNewIncome" component={AddNewIncome} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

// export default App;
export default () => {
  return <App />;
}