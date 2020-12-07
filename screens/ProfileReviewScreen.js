import React from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import {globalStyles} from '../styles/globalStyles'
export default function ProfileReviewScreen() {

    
    const data = [{
        name: "Derrik Chow",
        reviewerName: "John Smith",
        date: "1/1/2012",
        reviewBody: "Derrik is one of the best people that I ever met, it was a pleasure for me to talk to him and we got along and we were able to meet",
        
    
}]

    
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
            <Text>Reviews For <Text style={styles.name}>Yoko Ono </Text></Text>
                <FlatList
                    data={data}
                    renderItem={review => {
                        return (
                                <FlatList
                                    data={data}
                                        renderItem={review => {
                                            return (
                                                <View style={styles.reviewParent}>
                                                    
                                                    <View>
                                                        <Image source={{uri:"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}} style={styles.image}/>
                                                    </View>
                                                    <View style={styles.reviewWrapper}>
                                                        <Text style={styles.name}>{review.item.reviewerName} <Text style={styles.date}>{review.item.date}</Text></Text>
                                                        <Text style={styles.reviewBody}>{review.item.reviewBody}</Text>
                                                        </View>
                                                </View>
                                            )
                                        }}
                                        />    
                        )
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight:"bold"
    },
    date:{
        marginLeft: 10,
        opacity:0.3
    },
    reviewWrapper: {
        marginTop: 20,
        marginBottom:20
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100,
        margin:10
    },
    reviewParent: {
        marginTop: 10,
        marginBottom:10,
        display: 'flex',
        flexDirection: "row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    reviewBody: {
        flexWrap: 'wrap',
        width:250
        
    }
})
