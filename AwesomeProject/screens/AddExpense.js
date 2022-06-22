import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

import Icon from 'react-native-vector-icons/FontAwesome';

function renderNavBar(navigation) {
    return(
      <View
        style={{
            flexDirection: 'row',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
            style={{ justifyContent: 'center', width: 50, }}
            // onPress={() => console.log('Go Back')}
            onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            style={{
                width: 30,
                height: 30,
                tintColor: COLORS.primary
            }}
          />
        </TouchableOpacity>
      </View>
    )
}

const RegistrationScreen = (navigation) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ 
          paddingHorizontal: SIZES.padding, 
          paddingVertical: SIZES.padding, 
          backgroundColor: COLORS.white}}
        >
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>
          Add New Expense
        </Text>
        <Text style={{...FONTS.h3, color: COLORS.darkgray, marginVertical: 10}}>
          Enter your details of the expense
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'amount')}
            onFocus={() => handleError(null, 'amount')}
            iconName="dollar"
            label="Amount"
            placeholder="Enter the transaction value"
            error={errors.amount}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'expenseTitle')}
            onFocus={() => handleError(null, 'expenseTitle')}
            // iconName="account-outline"
            iconName="pencil"
            label="Expense Title"
            placeholder="Enter your expense title"
            error={errors.expenseTitle}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            // iconName="phone-outline"
            iconName="dollar"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            // iconName="lock-outline"
            iconName="dollar"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Submit " onPress={validate} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AddExpense = () => {
    const navigation = useNavigation();
    
    return(
      <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
        {/* Nav bar section */}
        {renderNavBar(navigation)}
        {RegistrationScreen(navigation)}
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

export default AddExpense;