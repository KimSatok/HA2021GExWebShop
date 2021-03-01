import React from 'react'
import { StyleSheet, View} from 'react-native'
import Item from "./Item";

//simulates listed items from server


const Items = (props) => {
    return (
      <View style={ [styles.container, props.style]}>   
        { props.itemsList.map(s => <Item key={s.id} name={s.name} listername={s.listername} category={s.category} description={s.description} price={s.price} postDate={s.postDate} image={s.itemImage}></Item>)}
      </View>
    )
  }//items
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
      }//container
  });//styles

  export default Items
