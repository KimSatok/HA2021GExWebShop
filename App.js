import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from "./components/Header";
import TabNavigator from "./TabNavigator";



export default function ShoppeApp() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.topbox}><Header></Header></View>
      <SafeAreaView style={styles.mainviewbox}>
        <TabNavigator></TabNavigator>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}// Function ShoppeApp



const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: "column",
    paddingTop: 40,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
  },//style maincontainer

  mainviewbox: {
    flex:6,
    width: "100%",
    height: "100%",
    padding: 15,
    alignContent: "center",
    justifyContent: "center",
  },//mainview box
  
  topbox: {
    flex:1, 
    backgroundColor:"#f5f5f5",
    borderColor:"#000000",
    borderStyle:"solid",
    borderWidth: 1,
    borderRadius: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  }//style topbotbox

});// const styles
