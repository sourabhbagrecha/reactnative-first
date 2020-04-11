import React from 'react';
import {Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Priyansh",
      id: "1",
      age: Math.floor(Math.random()*20 + 10)
    },
    {
      name: "Alex",
      id: "2",
      age: Math.floor(Math.random()*20 + 10)
    },
    {
      name: "Jacob",
      id: "2.5",
      age: Math.floor(Math.random()*20 + 10)
    },
    {
      name: "Stuart",
      id: "3",
      age: Math.floor(Math.random()*20 + 10)
    },
    {
      name: "Charles",
      id: "4",
      age: Math.floor(Math.random()*20 + 10)
    },
    {
      name: "Robert",
      id: "5",
      age: Math.floor(Math.random()*20 + 10)
    }
  ];
  return (
    <>
      <Text>Hey! These are my friends:</Text>
      {/* {friends.map(f => <Text style={styles.friend}>{f}</Text>)} */}
      <FlatList
        data={friends}
        renderItem={({item, index}) => {
          return <Text 
            style={styles.friend} 
            key={item.id}
          >
            {index+1}: {item.name} - Age: {item.age}
          </Text>
        }}
      />
    </>

  )
}

const styles = StyleSheet.create({
  friend: {
    marginVertical: 20,
    fontSize: 30,
    color: "teal",
    fontWeight: "800"
  }
})

export default ListScreen;