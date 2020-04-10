import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ImageDetails = ({source, title, score}) => {
  console.log(title, source)
  return <View style={styles.view}>
    <Image
      style={styles.imageStyles}
      source={source}
    />
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 100,
    width: 100
  },
  title: {
    fontSize: 30,
    marginLeft: 10
  },
  score: {
    fontSize: 20,
    marginLeft: 10
  },
  view: {
    display: "flex",
    padding: 20,
    flexDirection: "row"
  }
})

export default ImageDetails;