import { View, StyleSheet, Alert} from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import {createPostService, getDocumentTypesService} from '../services/TestServices'
export const PostForm = () => {
    const [code,setCode]=useState();
    const [descripcion,setDescripcion]=useState();
    const getDocumentTypes = () =>{
        getDocumentTypesService()
    }
    const createPost=()=>{
        createPostService({
            codigo: code,
            descripcion: descripcion
        },
    ()=>{
        Alert.alert("CONFIRMACIÓN","SE HA INGRESADO UN NUEVO POST")
    });
    }
    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">NUEVO MENSAJE</Text>
        </View>
        <View style={styles.formContainer}>            
            <Input
                placeholder='CODIGO'
                value={code}
                onChangeText={(value)=>{
                    setCode(value);
                }}
            />
            <Input
                placeholder='DESCRIPCIÓN'
                value={descripcion}
                onChangeText={(value)=>{
                    setDescripcion(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={createPost}
            />
            <Button 
                title="DOCUMENT TYPE"
                onPress={getDocumentTypes}
            />
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection:'column',
        justifyContent:'center'

    }
});
