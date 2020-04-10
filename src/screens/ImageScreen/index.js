import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ImageDetails from './ImageDetails';

const ImageScreen = () => {
  const images = [
    {
      title: "Beach",
      source: require("../../../assets/beach.jpg"),
      score: 8
    },
    {
      title: "Forest",
      source: require("../../../assets/forest.jpg"),
      score: 9
    },
    {
      title: "Mountain",
      source: require("../../../assets/mountain.jpg"),
      score: 10
    }
  ];
  return <View>
    <Text>Image Screen</Text>
    <FlatList
      data={[...images, ...images]}
      renderItem={({item}) => {
        return <ImageDetails {...item}/>
      }}
    />
  </View>
}

export default ImageScreen;