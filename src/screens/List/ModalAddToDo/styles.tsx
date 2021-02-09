import {StyleSheet,} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        height:400,
        borderRadius:10,
    },
    buttonAdd: {
        backgroundColor:'orange'
    },
    buttonClose: {
        backgroundColor:'red'
    },
    buttons : {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    errorText: {
        fontSize:14
    }
    

});