import React from 'react';
import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (

    //Create nest of views

    //Create styles for each of the views
    //with fixed widths and heights
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default FixedDimensionsBasics;