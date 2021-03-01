import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'



const NewItemView = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Add a new item</Text>

          <View style={styles.datacontainer}>
            <Text style={ styles.dataentry}>Item Name:</Text>
            <TextInput style={styles.datainput} placeholder="Item Name"></TextInput>
          </View>

          <View style={styles.datacontainer}>
            <Text style={ styles.dataentry}>Category:</Text>
            <TextInput style={styles.datainput} placeholder="Categories"></TextInput>
          </View>

          <View style={styles.datacontainer}>
            <Text style={ styles.dataentry}>Description:</Text>
            <TextInput style={styles.datainput} placeholder="Very item, item."></TextInput>
          </View>

          <View style={styles.datacontainer}>
            <Text style={ styles.dataentry}>Price:</Text>
            <TextInput style={styles.datainput} placeholder="10.00€"></TextInput>
          </View>

          <View style={styles.addbutton}>
            <Button title="Add Image"></Button>
          </View>

          <View style={{margin:25}}>
            <Button title="Confirm"></Button>
          </View>
        
      </View>
    )
  }//NewItemView
  
  const styles = StyleSheet.create({
    maincontainer: {
      flexDirection: "column",
      paddingTop: 40,
      height: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
    },//style maincontainer
    datacontainer: {
      flexDirection: "row",
      marginVertical:10,
      paddingLeft: 20,
      borderColor:"#000000",
      borderStyle:"solid",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRadius: 1,
    },//datacontainer
    dataentry:{
      fontSize:16,
      flex:1
    },//dataentry
    datainput:{
      flex:1
    },//datainput
    addbutton: {
      padding: 30,
      borderColor:"#000000",
      borderStyle:"solid",
      borderWidth: 1,
      borderRadius: 15,
      width: "100%",
    },//addbutton
    title:{
      fontSize:40,
      marginBottom:50,
    },//title
  }); //styles

  export default NewItemView
