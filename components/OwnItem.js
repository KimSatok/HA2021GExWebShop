import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


//simulates own listed items from server, uses array to form the list



const OwnItem = (props) => {
    return (
      <View style={styles.container}>   
            <Text style={ styles.dataentry}>{ props.name}</Text>
            <Text style={ styles.dataentry}>Category: { props.category}</Text>
            <Text style={ styles.dataentry}>{ props.description}</Text>
            <Text style={ styles.dataentry}>Price: { props.price}</Text>
            <Text style={ styles.dataentry}>Posting date: { props.postDate}</Text>
            <Image style={ styles.image } source={ props.image }></Image>
      </View>
    )
}//ownitem
  
  const styles = StyleSheet.create({
      container:{
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        borderColor:"#000000",
        borderStyle:"solid",
        borderWidth: 1,
        borderTopWidth: 0,
        borderRadius: 1,
      }, //container
      dataentry:{
        marginBottom: 10,
        width: "100%",
        borderColor:"#000000",
        borderStyle:"solid",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 1,
      },//dataentry
      image:{
        width: 80,
        height: 80,
        justifyContent: "center",
      } //image
  }); //styles

  export default OwnItem

