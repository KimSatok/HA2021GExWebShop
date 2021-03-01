import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import OwnItem from "./OwnItem";

//simulates own listed items from server


const OwnItems = (props) => {
    return (
      <View style={ [styles.container, props.style]}>   
        { props.itemsList.map(s => <OwnItem key={s.id} name={s.name} category={s.category} description={s.description} price={s.price} postDate={s.postDate} image={s.itemImage}></OwnItem>)}
      </View>
    )
  }//ownitem
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
      }//container
  });//styles

  export default OwnItems
