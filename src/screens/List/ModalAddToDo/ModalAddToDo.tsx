import React,{useState,useEffect,useRef} from 'react';
import {View, Text,Keyboard} from 'react-native';
import { styles } from './styles';
import {Button} from '../../../components/Button/Button'
import{useSelector,useDispatch} from 'react-redux';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ListType} from '../../../interfaces/ListType';
import {AppState} from '../../../redux/store/store';
import {setListTC} from '../../../redux/actions/actions'
import {generate as id} from "shortid"
interface Props{
    controlModal:()=>void,
    editId?:string
 }
export const ModalAddToDo:React.FC<Props> = ({controlModal,editId}) => {
    const[newToDo,setToDo]=useState<string>('')
    const[errorText,setErrorText]=useState<string>('')
    const list:ListType[] = useSelector( (state:AppState) => state.list )
    const dispatch = useDispatch()

    useEffect(()=>{
        startModal()
    },[])
    const startModal = () => {
        if(editId){
            const element = list.find((el:ListType)=> el.id === editId)
            if(element) {
                setToDo(element.text)
            }
            
        }
          
    }

    const addToDo = () => {
        if(editId){
            const index = list.findIndex(el=>el.id === editId)
            dispatch(setListTC([...list.slice(0,index),{id:editId,text:newToDo},...list.slice(index+1)]))
            controlModal()
         return    
        }
        if(newToDo.length){ 
            dispatch(setListTC([...list,{id:id(),text:newToDo}]))
            controlModal()
        } else {
            setErrorText('Минимум 1 буква')
        }
    }

    return (
        <View style={styles.container}>
            <Input
                value={newToDo}
                placeholder='Добавить новую задачу'
                leftIcon={
                    <Icon
                    name='check-circle'
                    size={24}
                    color='black'
                    />
                }
                onChangeText={val => {setToDo(val); setErrorText('')}}
                errorMessage={errorText}
                errorStyle={styles.errorText}
                onBlur={()=>{Keyboard.dismiss()}}
                defaultValue={newToDo}
            />
            <View style={styles.buttons}>
            <Button
                style={styles.buttonAdd}
                pressHandler={addToDo}
                buttonText={editId ? 'Редактировать':'Добавить'}
            />
            <Button
                style={styles.buttonClose}
                pressHandler={controlModal}
                buttonText='Закрыть'
            />
            </View>

        </View>
    )
}