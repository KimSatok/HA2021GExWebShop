import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'


const LogIn = (props) => {

  const [userEmail, setUserEmail] = useState("juppi@juusoppi.com");
  const [password, setPassword] = useState("");

    return (
      <View style={styles.maincontainer}>

        <View style={styles.subcontainer}> 
          
          <Text>Email</Text>

          <TextInput 
            style={styles.inputfield} 
            placeholder= "Email"
            value={ userEmail }
            onChangeText={ value => setUserEmail(value)}>

          </TextInput>

        </View> 
        
        <View style={styles.subcontainer}> 
          
          <Text>Password</Text>

          <TextInput 
            style={styles.inputfield} 
            secureTextEntry={true} 
            placeholder= "Password"
            style={ styles.input }
            value={ password }
            onChangeText={ value => setPassword(value)}>
          </TextInput>

        </View>

        <View style={styles.loginbutton}>
          <Button  title="Log In" onPress={() => props.navigation.navigate('Search')}/> 
        </View>
      </View>
    )
  } // ProfileView

  const styles = StyleSheet.create({
    //loginscreen styles
    maincontainer: {
      flexDirection: "column",
      paddingTop: 40,
      height: "100%",
      backgroundColor: '#fff',
    },//style maincontainer

    subcontainer: {
      alignItems:"center",
    },//subcontainer

    inputfield: {
      backgroundColor:"#D3D3D3",
      height: 40,
      width: 150,
    },//inputfield

    loginbutton: {
      marginTop: 30,
    }//login button - end of login screen styles

  })//styles
  
  export default LogIn
