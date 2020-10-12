import React from 'react'
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <SafeAreaView style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
                {/**Write function to hide search bar */}
 
                <TextInput
                    
                     style={styles.input}
                     placeholder = 'Search...'
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
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
})
