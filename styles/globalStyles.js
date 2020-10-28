import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText:{
        fontFamily: "Kalam-Bold",
        fontSize: 40,
        textAlign: 'center',

    },
    card: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderColor: "#fff",
        padding: 5,
        position: 'relative'
        // alignItems: "center",
      },
      container: {
        flex: 1,
        backgroundColor: "#FF5555",
        borderWidth: 0,
      },
      input:{
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        
      },
      inputView:{
        width:"80%",
        // backgroundColor:"#465881",
        // borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        // padding:20
      },
      errorText:{
        color: "crimson",
        fontWeight:"bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center"
      }
}) 