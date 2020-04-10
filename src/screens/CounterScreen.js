import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CounterScreen = () => {
  const [num, setNum] = useState(0);

  return <View>
    <Text>Count: {num}</Text>
    <Button 
      onPress={() => setNum(num+1)}
      title="Increase"
    />
    <Button 
      onPress={() => setNum(num-1)}
      title="Decrease"
    />
  </View>
};

const styles = StyleSheet.create({
  
})

export default CounterScreen;