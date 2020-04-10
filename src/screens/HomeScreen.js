import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  // console.log(props);
  return (
    <View style={styles.view_style}>
      <Button
        title="Go to Friends!"  
        onPress={() => navigate("Friends")}
      />
      <Button 
        onPress={() => navigate("ImageList")} 
        title="Go to Image List"
      />
      <Button
        onPress={() => navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => navigate("ColorGen")}
        title="Go to Random Color Generator"
      />
      <Button
        onPress={() => navigate("Adjuster")}
        title="Go to Color Adjuster"
      />
    </View>
  )
  ;
};

const styles = StyleSheet.create({
  view_style: {
    padding: 30
  }
});

export default HomeScreen;