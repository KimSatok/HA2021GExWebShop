import React from 'react'
import { StyleSheet, View} from 'react-native'
import Items from "./Items";

//simulates listed items from server



const ItemList = (props) => {
    return (
        <View style={ styles.container }>
            <Items itemsList={props.itemList}></Items>
        </View>
    )
  }//Itemlist
  
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

  export default ItemList
