import React, {useState,useEffect} from 'react'
import {View,StyleSheet,TextInput} from 'react-native'

export default function Search (){

    const [location, setLocation]=useState('disney');
    const [debouncedLocation,setDebouncedLocations]= useState(location)
    const [results,setResults] = useState([])

    useEffect(()=>{
        const timeId=setTimeout(()=>{
            setDebouncedTerms(location);
        },1000)
        return ()=>{
            clearTimeout(timeId)
        }
    },[location])

    useEffect(()=>{
        const search = async ()=>{
            const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format:'json',
                    srsearch: debouncedTerms,
                }
            })
            setResults(data.query.search)
        };
        search();
    },[debouncedLocation])





    
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder = 'Search...'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    input:{
        marginBottom: 10,
        
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 45,
        width: "90%",
        backgroundColor: '#FFF',
        paddingLeft:20,
        paddingRight:10,
     },
})