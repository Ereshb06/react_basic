import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Tudoadd(props) {
    const [text , addtext ]=useState('')

    const changeHandler=(val)=>{
        addtext(val)
    }



    return(
        <View >
            <TextInput style={styles.addbox} 
            placleolder='add text'
            onChangeText={changeHandler}/>
            <Button  onPress={()=>props.submitHandler (text)} title="add field" color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    addbox: {
      marginBottom:10,
      paddingHorizontal:6,
      paddingVertical: 8,
      borderBottomWidth:1,
      borderBottomColor:"#ddd"
    }
  });