import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';

import SelectList from 'react-native-dropdown-select-list';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const K_OPTIONS = [
  {
    value: 'Juventus',
    key: 'JUVE',
  },
  {
    value: 'Real Madrid',
    key: 'RM',
  },
  {
    value: 'Barcelona',
    key: 'BR',
  },
  {
    value: 'PSG',
    key: 'PSG',
  },
  {
    value: 'FC Bayern Munich',
    key: 'FBM',
  },
  {
    value: 'Manchester United FC',
    key: 'MUN',
  },
  {
    value: 'Manchester City FC',
    key: 'MCI',
  },
  {
    value: 'Everton FC',
    key: 'EVE',
  },
  {
    value: 'Tottenham Hotspur FC',
    key: 'TOT',
  },
  {
    value: 'Chelsea FC',
    key: 'CHE',
  },
  {
    value: 'Liverpool FC',
    key: 'LIV',
  },
  {
    value: 'Arsenal FC',
    key: 'ARS',
  },

  {
    value: 'Leicester City FC',
    key: 'LEI',
  },
]

const AddCategory = () => {
  const [selected, setSelected] = React.useState("");
  
  const data = [{key:'Jammu & Kashmir',value:'Jammu & Kashmir'}];
  // You can also pass data in array ['Jammu & Kashmir', 'Gujrat', 'West Bengal', 'Tamil Nadu'];

  return(
    <ScrollView 
      contentContainerStyle={{ 
      paddingHorizontal: SIZES.padding, 
      paddingVertical: SIZES.padding, 
      backgroundColor: COLORS.white}}>
      <View style={{marginVertical: 20}}>
        <SelectList setSelected={setSelected} data={K_OPTIONS} />
      </View>  
    </ScrollView> 
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