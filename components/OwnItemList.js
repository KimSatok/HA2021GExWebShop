import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import OwnItems from "./OwnItems";

//simulates own listed items from server



const OwnItemList = (props) => {
    return (  
        <View style={ styles.container }>
            <Text style={ styles.title}>Items listed by { props.name}</Text>
            <OwnItems itemsList={props.itemList}></OwnItems>
        </View>
    )
  }//ownitemlist
  
  const styles = StyleSheet.create({
      container:{
        flex:1,
        width: "100%",
      },//container
      title:{
        marginTop:10,
        marginBottom:10,
      }//title
  });//styles

  export default OwnItemList
