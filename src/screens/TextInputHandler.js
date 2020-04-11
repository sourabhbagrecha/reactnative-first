import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

function TextInputHandler(props) {
  const {} = props
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Enter Your Name:"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <View style={{backgroundColor: 'Teal'}}>
        <Text>Your name is: {name}</Text>
      </View>
      <View style={{padding: 30}}>
        <TextInput
          placeholder="Enter Password:"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <View style={{backgroundColor: 'Teal'}}>
          {password.length < 5 && <Text>Your password must be longer than 5 characters!</Text>}
        </View>
      </View>
    </View>
  )
};

export default TextInputHandler;
