import { StyleSheet } from "react-native";
import Operator from "../components/Operator";

const colors  = {
    blue_dark: "#011627",
    pink : '#FF3366',
    green : '#2EC4B6',
    white : '#F6F7F8',
    blue_sun : '#20A4F3',
}
export const global = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.blue_dark,
        display : 'flex',
        justifyContent : 'space-evenly',
        paddingHorizontal : 15
    },
    containerButtons : {
        flexDirection : 'row',
        gap : 10,
        flexWrap : 'wrap',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 80,
    },
    button : {
        width :80,
        height : 80,
        backgroundColor : 'rgba(255,255,255,0.2)',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 100,
    },
    text: {
        color : colors.white,
        fontSize : 35,
        fontFamily : 'nunito-regular',
        
    }
    ,
    result : {
        fontSize : 40,
        fontFamily : 'nunito-regular',
        textAlign:'right',
        color : colors.white,
        paddingRight : 10,
        marginTop : 100,
        height:300,
    },
    operator : {
       width : 80,
       height : 80,
       borderRadius : 100,
       backgroundColor : colors.blue_sun,
       display : 'flex',
       justifyContent : 'center',
       alignItems : 'center',
    },
    equal : {
       width : 80,
       height : 80,
       borderRadius : 100,
       backgroundColor : colors.green,
       display : 'flex',
       justifyContent : 'center',
       alignItems : 'center',
    },
    other : {
        width : 80,
        height : 80,
        borderRadius : 100,
        backgroundColor : colors.pink,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }
})