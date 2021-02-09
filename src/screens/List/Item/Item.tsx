import React,{useState,useEffect} from 'react';
import {View, Text,Animated,Button} from 'react-native';
import {ListType} from  '../../../interfaces/ListType'
import { styles } from './styles';
import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable';
interface Props{
     item:ListType,
     deleteItem :(id:string)=>void,
     editItem:(id:string)=>void
 }
export const Item:React.FC<Props> = ({item,deleteItem,editItem}) => {
    const [check,setCheck]=useState(false)
    const {id,text} = item

    const renderLeftActions = () => {
        return(
            <View>
                <Text >dfsdf</Text>
            </View>
        )
    };

  
    return (
        <Swipeable renderRightActions={renderLeftActions}>
            <View style={styles.container}>
                <CheckBox
                    center
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={check}
                    onPress={() => setCheck(!check)}
                />
                <Text style={styles.itemText}>{text}</Text> 
                <Button onPress={()=>editItem(id)} title='Редактировать'></Button>
                <Button onPress={()=>deleteItem(id)} title='Удалить'></Button>
            </View>
        </Swipeable>
    )
}