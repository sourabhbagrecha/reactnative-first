import React from 'react';
import { View } from 'react-native';

const ColorBox = (props) => {
  const {backgroundColor} = props

  return (
    <View style={{backgroundColor, width: 50, height: 50}}>

    </View>  
  )
};

export default ColorBox;