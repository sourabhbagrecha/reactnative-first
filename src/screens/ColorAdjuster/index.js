import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Adjuster from './Adjuster';

function ColorAdjuster(props) {
  const [color, setColor] = useState({
    "red": 0,
    "green": 0,
    "blue": 0
  });
  const colorObject = x => ({
    name: x,
    more: () => setColor({...color, [x]: color[x]+20 < 255 ? color[x]+20 : color[x]}),
    less: () => setColor({...color, [x]: color[x]-20 > 0 ? color[x]-20 : color[x]})
  });
  const colors = ["red", "green", "blue"].map(x => colorObject(x));
  return (
    <View>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => <Adjuster {...item}/>}
      />
      <View style={{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`, height: 200, width: 200}}>
        <Text>Red: {color.red}</Text>
        <Text>Green: {color.green}</Text>
        <Text>Blue: {color.blue}</Text>
      </View>
    </View>
  )
};

export default ColorAdjuster;