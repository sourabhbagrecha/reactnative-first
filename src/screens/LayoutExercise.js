import React from 'react';
import { StyleSheet, View } from 'react-native';

function LayoutExercise(props) {
  const {} = props

  return (<View>
    <View style={styles.parentOne}>
      <View style={styles.firstBlock}></View>
      <View style={styles.thirdBlock}></View>
    </View>
    <View style={styles.parentTwo}>
      <View style={styles.secondBlock}></View>
    </View>
  </View>
    
  )
};

const styles= StyleSheet.create({
  parentOne: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  parentTwo: {
    flexDirection: 'row'
  },
  firstBlock:{
    width: 100,
    height:100,
    backgroundColor: "blue"
  },
  secondBlock:{
    width: 100,
    height:100,
    backgroundColor: "green",
    alignSelf: "center"
  },
  thirdBlock:{
    width: 100,
    height:100,
    backgroundColor: "pink",
  }
})

export default LayoutExercise
