import React,{useState,useEffect} from 'react';
import {View,FlatList,Text,ScrollView} from 'react-native';
import {styles} from './styles'
import Modal from 'react-native-modal';
import{useSelector,useDispatch} from 'react-redux';
import{ListType} from '../../interfaces/ListType';
import {AppState} from '../../redux/store/store'
import {Item} from './Item/Item'
import {Button} from '../../components/Button/Button'
import {ModalAddToDo} from './ModalAddToDo/ModalAddToDo'
import {setListTC} from '../../redux/actions/actions'

interface Props {

}

export const List:React.FC<Props> = () => {

    const list:ListType[] = useSelector( (state:AppState) => state.list )
    const[modalView,setModalView] = useState<boolean>(false)
    const[editId,setEditId]= useState<string>('')
    const dispatch = useDispatch()

    const renderItem = ({item}:any) => {
       return ( 
        <View>
            <Item item={item} deleteItem ={deleteItem } editItem={editItem}/>
        </View>
       )
    }

    const controlModal = ():void => {
        setModalView(!modalView)
    }
    const deleteItem = (id:string) => {
         dispatch(setListTC(list.filter(el=>el.id !== id)))
    }
    const editItem = (id:string) => {
        setEditId(id)
        setModalView(!modalView)
    }
  
    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList<any>
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.button}>
                <Button
                    style={styles.button}
                    pressHandler={controlModal}
                    buttonText='Добавить'
                />
            </View>
            <View>
                <Modal
                    animationIn='slideInUp'
                    animationOut='fadeOut'
                    isVisible={modalView}
                    animationInTiming={800}
                    animationOutTiming={800}
                    backdropTransitionOutTiming={800}
                    backdropTransitionInTiming={800}
                    useNativeDriver={true}
                    onModalHide={()=>setEditId('')}
                >
                    <ModalAddToDo controlModal={controlModal} editId={editId} />

                </Modal>
            </View>

        </View>
    )
}