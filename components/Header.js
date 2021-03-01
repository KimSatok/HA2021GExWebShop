import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View>
            <Text style={styles.title}>Shoppekauppa</Text>
            <Text>No API</Text>
        </View>
    )
} // Function header

const styles = StyleSheet.create({

    title: {
      fontSize: 30,
    }//title
});// const styles


