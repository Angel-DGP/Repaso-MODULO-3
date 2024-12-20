import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { createPostService, getAllPostsService, getByUserIdService, getXXXService, postYYYService, putZZZService, updatePostService } from '../services/TestServices'


export const TestWebServices = () => {
  const getAllPosts = () =>{
    getAllPostsService()
  }
  const createPost = ()=>{
    createPostService()
  }
  const getByUserId = () =>{
    getByUserIdService()
  }
  const updatePost = () =>{
    updatePostService()
  }
  const getXXX = () =>{
    getXXXService()
  }
  const postYYY = () =>{
    postYYYService()
  }
  const putZZZ = () =>{
    putZZZService()
  }
  return <View style={styles.container}>
  <Text style={styles.textContainer}>MODULO 3</Text>
  <View style={styles.buttonContainer}>
  <Button
      title="Recuperar Posts"
      //onPress={getAllPosts()}
    />
    <Button
      title="Crear Post"
      //onPress={createPost()}
    />
      <Button
      title="Actualizar Post"
      //onPress={updatePost()}
      
    />
      <Button
      title="Filtrar"
      //onPress={getByUserId()}
    />
        <Button
      title="XXX"
      //onPress={getXXX()}
    />

    <Button
      title="YYY"
      //onPress={postYYY()}
    />

    <Button
      title="ZZZ"
      //onPress={putZZZ()}
    />
    
  </View>
</View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});