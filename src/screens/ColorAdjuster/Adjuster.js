import React from 'react';
import { View, Text, Button } from 'react-native';

function Adjuster(props) {
  const {name, more, less} = props

  return (
    <View>
      <Text>{name}</Text>
      <Button key="More" onPress={() => more()} title={`More ${name}`} />
      <Button key="Less" onPress={() => less()} title={`Less ${name}`} />
    </View>
  )
};

export default Adjuster;