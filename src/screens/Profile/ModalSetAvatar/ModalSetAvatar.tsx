import React,{useState} from 'react';
import {View,Keyboard} from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';

interface Props{
    openModal:()=>void,
    setPhoto:any
 }
export const ModalSetAvatar:React.FC<Props> = ({openModal,setPhoto}) => {

    const changeAvatar = (selected:number) => {
        switch(selected){
            case 0 :{
                openModal()
                ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                }).then(image => {
                    setPhoto(image.path,'photo');
                });
                break;
            }
            case 1:{
                openModal()
                ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                }).then(image => {
                    setPhoto(image.path,'photo');
                });
                break;
            }
        }

    }

    return (
        <View style={styles.container}>
            <Button title='Сделать новое фото'   
            icon={{
                name: "photo-camera",
                size: 25,
                color: "white"
            }}
            buttonStyle={styles.buttons}
            onPress={()=>changeAvatar(0)}
            />
            <Button title='Выбрать из Галереи'
            icon={{
                name: "photo",
                size: 25,
                color: "white"
            }}
            buttonStyle={styles.buttons}
            onPress={()=>changeAvatar(1)}
            />

            <Button title='Отмена'
            buttonStyle={styles.buttons}
            onPress={openModal}
            />
        </View>
    )
}