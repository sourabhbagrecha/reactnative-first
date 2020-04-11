import React, { useState, useReducer } from 'react';
import { View, FlatList, Text } from 'react-native';
import Adjuster from './Adjuster';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  if(state[action.type.slice(7)] + action.amount < 255 && state[action.colorToChange] + action.amount > 0){
    switch (action.colorToChange) {
      case 'change_red':
        return  {...state, red: state.red + action.payload};
      case 'change_green':
        return  {...state, green: state.green + action.payload};
      case 'change_blue':
        return  {...state, blue: state.blue + action.payload};
      default:
        return state;
    }
  } else {
    return state
  }
}

function ColorAdjuster(props) {  
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const colorObject = x => ({
    name: x,
    key: x,
    more: () => dispatch({type: `change_${x}`, payload: COLOR_INCREMENT}),
    less: () => dispatch({type: `change_${x}`, payload: -COLOR_INCREMENT})
  });
  const colors = ["red", "green", "blue"].map(x => colorObject(x));
  return (
    <View>
      <FlatList
        data={colors}
        renderItem={({item}) => <Adjuster key={item.key} {...item}/>}
      />
      <View style={{backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, height: 200, width: 200}}>
        <Text>Red: {state.red}</Text>
        <Text>Green: {state.green}</Text>
        <Text>Blue: {state.blue}</Text>
      </View>
    </View>
  )
};

export default ColorAdjuster;