import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText:{
        fontFamily: "Kalam-Bold",
        fontSize: 40,
        textAlign: 'center',

    },
    card: {
        flex: 1,
        backgroundColor: "#fdfcfa",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      
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
      },
      headerContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent:"center"
        
      },
      headerContent:{
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        

      },
      headerText: {
        fontSize: 30,
        fontFamily: "Kalam-Bold",
      
      },
      hamburgerIcon: {
        // position: "absolute",
        // right:"111%",
        // top: 0,
      },
      searchIcon: {
        // position: "absolute",
        // left: "111%",
        borderWidth: 1,
        borderRadius: 18,
        padding: 7,
      },
      modalContainer: {
        flex: 1,
      },
      modalContent: {
        flex: 1,
      },
}) 