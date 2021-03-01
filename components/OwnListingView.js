import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import OwnItemList from "./OwnItemList";
import tapeImage from '../images/img1.jpg';

var myItemList = [
    {
        id: 1,
        name: "Flex Tape",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "15.50€",
        postDate: "2020-05-30",
        itemImage: tapeImage,
    },
    {
        id: 2,
        name: "Flex Tape",
        category: "Hobbies, Home",
        description: "Tough rubbery tape to seal everything.",
        price: "52.50€",
        postDate: "2021-05-30",
        itemImage: tapeImage,
    },
    {
        id: 3,
        name: "Flex Tape",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "5.50€",
        postDate: "2022-05-30",
        itemImage: tapeImage,
    },
    {
        id: 4,
        name: "Flex Tape",
        category: "Hobbies",
        description: "Tough rubbery tape to seal anything.",
        price: "25.50€",
        postDate: "2023-05-30",
        itemImage: tapeImage,
    },
    {
        id: 5,
        name: "Flexible Tape",
        category: "Hobbies, Home",
        description: "Tough rubbery tape to seal anything.",
        price: "15.55€",
        postDate: "2020-05-30",
        itemImage: tapeImage,
    },
  ];//own listed items array end

const OwnListingView = () => {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
        <OwnItemList
            name = "Juusoppi Juustonen"
            itemList = { myItemList }
            >
        </OwnItemList>
        </ScrollView>
      </SafeAreaView>
    )
  }//ownlistingview
  
  export default OwnListingView
