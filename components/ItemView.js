import React from 'react'
import { View, Text, Button, SafeAreaView, ScrollView, Image } from 'react-native'
import ItemList from "./ItemList";
import tapeImage from '../images/img2.jpg';
import tapeImage2 from '../images/img4.jpg';

var OtherItemList = [
    {
        id: 1,
        name: "Flex Tape",
        listername: "Juppi Juppinen",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "15.50€",
        postDate: "2020-05-30",
        itemImage: tapeImage,
    },
    {
        id: 2,
        name: "Flex Tape",
        listername: "Jeppi Joppinen",
        category: "Hobbies, Home",
        description: "Tough rubbery tape to seal everything.",
        price: "52.50€",
        postDate: "2021-05-30",
        itemImage: tapeImage2,
    },
    {
        id: 3,
        name: "Flex Tape",
        listername: "Jippi Jappinen",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "5.50€",
        postDate: "2022-05-30",
        itemImage: tapeImage,
    },
    {
        id: 4,
        name: "Flex Tape",
        listername: "Juppa Juppinen",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "25.50€",
        postDate: "2023-05-30",
        itemImage: tapeImage2
    },
    {
        id: 5,
        name: "Flexible Tape",
        listername: "Jappi Juppinen",
        category: "Hobbies, Home",
        description: "Tough rubbery tape to seal anything.",
        price: "15.55€",
        postDate: "2020-05-30",
        itemImage: tapeImage,
    },
  
  ];//listed items array end

const ItemView = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView>
          <ItemList
              itemList = { OtherItemList }
              >
          </ItemList>
          </ScrollView>
          <Button
            title="Search"
            onPress={() => props.navigation.navigate('Search')}
            />
        </SafeAreaView>
      )
  }//itemview
  
  export default ItemView