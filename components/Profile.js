import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

let accountholdername = "Juusoppi Juustonen";
let useremail ="juppi@juusoppi.com";
let Homeloc = "Oulu, Finland";
let nrosold = "50";
let nroitems = "5";


const SearchView = (props) => {
    return (
        <View style={styles.maincontainer}>
            <View>
                <View>
                    <Text style={{ fontSize: 20 }}>Name: {accountholdername} </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Email: {useremail} </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Location: {Homeloc} </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Items sold: {nrosold} </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Items on sale: {nroitems} </Text>
                </View>
            </View>
            <View style={styles.logoutbutton}>
                <Button
                    title="Change Account"
                    onPress={() => props.navigation.navigate('LogIn')}
                />
            </View>
        </View>
    )
  }//SearchView

  const styles = StyleSheet.create({
    maincontainer: {
      flexDirection: "column",
      padding: 25,
      backgroundColor: '#fff',
    },//style maincontainer
    searchinput:{
        width:"100%",
        backgroundColor: "#D3D3D3",
    },//searchinput
    logoutbutton:{
    },//searchbutton
  }); // const styles

  export default SearchView
