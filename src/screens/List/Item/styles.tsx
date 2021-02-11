import {StyleSheet,} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth:'95%',
        height:75,
        backgroundColor:'#F4A460',
        margin:10,
        borderRadius:10,
    },
    itemText:{
        fontSize:24,
        fontFamily: 'Lobster-Regular',
        color:'black',
        flexShrink:1
    },
    itemTextDone:{
        fontSize:24,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid', 
        fontFamily: 'Lobster-Regular',
        color: '#ffe8df',
        flexShrink:1
    },
    checkBox:{
        alignSelf:'flex-start',
    }

});