import React,{useState,useEffect} from 'react';
import {View, Text,Animated,TouchableOpacity} from 'react-native';
import {ListType} from  '../../../interfaces/ListType'
import { styles } from './styles';
import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
interface Props{
     item:ListType,
     deleteItem :(id:string)=>void,
     editItem:(id:string)=>void
 }
export const Item:React.FC<Props> = ({item,deleteItem,editItem}) => {
    const [check,setCheck]=useState(false)
    const {id,text} = item
    const renderLeftActions = (progress:any,dragX:any) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          });
        return(
            <TouchableOpacity onPress={()=>editItem(id)}>
                <Animated.View style={{transform:[{scale:scale}]}}>
                    <Icon
                        name='edit'
                        size={85}
                        color='#A52A2A'
                    />
                </Animated.View>
            </TouchableOpacity>
        )
    };
    const renderRightActions = (progress:any,dragX:any) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            
          });
        return(
            <TouchableOpacity onPress={()=>deleteItem(id)} style={{ transform:[{rotate:'180deg'}]}}>
                <Animated.View style={{transform:[{scale:scale}]}}>
                    <Icon
                        name='trash'
                        size={85}
                        color='#A52A2A'
                    />
                </Animated.View>
            </TouchableOpacity>
        )
    };

  
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <Swipeable renderLeftActions={renderLeftActions}  renderRightActions={renderRightActions}>
                <View style={styles.container}>
                    <CheckBox
                        center
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={check}
                        onPress={() => setCheck(!check)}
                        style={styles.checkBox}
                        checkedColor='#91091e'
                    />
                    <Text style={check ? styles.itemTextDone : styles.itemText}>{text}</Text> 
                </View>
            </Swipeable>
        </TouchableOpacity>
    )
}