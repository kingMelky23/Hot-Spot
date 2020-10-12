import React from 'react'
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 

export default function PlainHeader({navigation,title}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <SafeAreaView style={styles.header}>
 
            <AntDesign name="search1" size={20} color="black" style={styles.searchIcon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
                {/**Write function to hide search bar */}

                {/* <TextInput
                    
                     style={styles.input}
                     placeholder = 'Search...'
                /> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        width: 250,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',

 
    },
    headerText:{
        
        fontSize: 30,
        fontFamily: 'Kalam-Bold',
        textAlign:'center'
        
    },
    icon:{
        position:'absolute',
        left: -25,
        top:0
        
    },
    input:{
        marginBottom: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 45,
        width: 300,
        backgroundColor: '#FFF',
        paddingLeft:10,
        paddingRight:10,
     },
     searchIcon:{
        position: 'absolute',
        right: -55,
        borderWidth:1,
        borderRadius: 18,
        padding:7,
    }
})
