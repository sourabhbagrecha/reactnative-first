import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import ColorBox from './ColorBox';

const RandomColorGen = () => {
  const [colors, setColors] = useState([{backgroundColor: "#2fe3bd", id: 123}]);
  const addRandomColor = () => {
    return {
      backgroundColor: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`,
      key: Math.floor(Math.random()*1000)
    }
  }
  return <View>
    <Button
      title="Add Color"
      onPress={() => setColors([...colors, addRandomColor()])}
    />
    <View>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item: {backgroundColor, id}}) => <ColorBox backgroundColor={backgroundColor} />}
      />
    </View>
  </View>
}

export default RandomColorGen;