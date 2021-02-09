import React,{useState,useEffect} from 'react';
import {View, Text,ScrollView,KeyboardAvoidingView} from 'react-native';
import { Input,Button} from 'react-native-elements';
import {useSelector} from "react-redux";
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Profile = () => {
    const[updateUser,setUpdateUser] = useState({
        full_name:'',
        email:'',
    })
    const [valideEmail, setValidEmail] = useState('')
    const [error,setError] = useState('')

    const changeName = (name:string) => {
        setUpdateUser({
            ...updateUser,
            full_name:name
        })

    }
    
    const changeEmail = (email:string) => {

        const valide = true
        if(valide){
            setUpdateUser({
                ...updateUser,
                email:email
            })
            setValidEmail(
                ''
            )
        } else {
            setValidEmail(
                'Неверная форма email'
            )
        }


    }

    
    const changeAvatar = () => {

    }

    const editProfile = () => {
            // const newProfile = {...updateUser}
            // userUpadateTC(newProfile)
            // .then(()=>{
            //     setLoading(false)
               
            // .catch(()=>{
            //     setError('Ошибка сервера')
                
            // })


    }
    return (
        <KeyboardAvoidingView>
            <ScrollView style={{marginTop:30}}>
                <Input
                    label="Сменить имя"
                    placeholder="Редактировать Имя"
                    onChangeText={name => changeName(name)}
                    defaultValue={updateUser.full_name || ''}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />


                <Input
                    label="Email"
                    placeholder="Редактировать email"
                    onChangeText={email => changeEmail(email)}
                    defaultValue={updateUser.email || ''}
                    keyboardType='email-address'
                    errorMessage = {valideEmail}
                    leftIcon={
                        <Icon
                        name='envelope'
                        size={24}
                        color='black'
                        />
                    }
                />



                {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={error}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{error}</Text>

                            <View style={{flexDirection:'row',justifyContent:'space-between',width:200,margin:5}}>
                                <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#E0FFFF" }}
                                onPress={() => setError('') }
                                >
                                <Text style={styles.textStyle}>Ok!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </Modal> */}


            </ScrollView>
        </KeyboardAvoidingView>
    )
}