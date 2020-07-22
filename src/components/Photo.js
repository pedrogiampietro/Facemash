import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Photo = ({ file, countLike, countDeslike }) => {

  const [ like, setLike ] = useState(countLike);
  const [ deslike, setDeslike ] = useState(countDeslike)

  const increment = () => {
    setLike(like + 1);
  };

  const descrement = () => {
    setDeslike(deslike - 1);
  };


  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={descrement}>
        <Text>{deslike} Deslike</Text>
      </TouchableOpacity>

      <Image style={styles.image} source={file}/>

      <TouchableOpacity onPress={increment}>
        <Text>{like} Like</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  image: {
    height: 180,
    width: 180,
  }
});


export default Photo
