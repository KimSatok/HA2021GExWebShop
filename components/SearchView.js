import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const SearchView = (props) => {
    return (
        <View>
            <View style={styles.maincontainer}>
                <Text style={{ fontSize: 20 }}>Search: </Text>
                <TextInput 
                    style={styles.searchinput}
                    placeholder= "Search for items">
                </TextInput>
            </View>
            <View style={styles.searchbutton}>
            <Button
                title="Search"
                onPress={() => props.navigation.navigate('Listed Items')}
            />
            </View>
        </View>
    )
  }//SearchView

  const styles = StyleSheet.create({
    maincontainer: {
      flexDirection: "row",
      padding: 25,
      backgroundColor: '#fff',
    },//style maincontainer
    searchinput:{
        width:"100%",
        backgroundColor: "#D3D3D3",
    },//searchinput
    searchbutton:{
    },//searchbutton
  }); // const styles

  export default SearchView
