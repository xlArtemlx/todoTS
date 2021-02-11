import React,{useState,useEffect} from 'react';
import {View, ScrollView,KeyboardAvoidingView} from 'react-native';
import { Input,Button} from 'react-native-elements';
import {useSelector,useDispatch} from "react-redux";
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {ModalSetAvatar} from './ModalSetAvatar/ModalSetAvatar';
import {User} from '../../interfaces/User';
import {AppState} from '../../redux/store/store';
import{setUserTC} from '../../redux/actions/actions'
import Storage from '../../services/Storage'


export const Profile = () => {
    const user:User = useSelector( (state:AppState) => state.user)
    const dispatch = useDispatch()
    const[updateUser,setUpdateUser] = useState<User>({
        firstName:'',
        secondName:'',
        email:'',
        photo:'',
    })
    const [valid, setValid] = useState<User>({
        firstName:'',
        secondName:'',
        email:'',
        photo:'',
    })
    const emptyUser:User = {firstName:'',secondName:'',email:'',photo:''}
    const [modalView,setModalView]=useState<boolean>(false)
    // const [photo,setPhoto]=useState<any>('https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg')


    useEffect(()=>{
        getUser()
    },[])
    useEffect(()=>{
        setUpdateUser({...user})
    },[user])

    const getUser = async () => {
        const oldUser = await Storage.getStorage("@user")
        if(typeof oldUser === 'object'){
            dispatch(setUserTC(JSON.parse(oldUser)))
        }
    }

    const openModal = () => {
        setModalView(!modalView)
    }
    
    const changeInput = (value:string,input:string) => {
        if(input === "firstname"){
            setValid({...valid,firstName:''})
            setUpdateUser((state)=>{
                return {
                    ...state,
                    firstName:value
                }
            })
        }else if(input === "secondname"){
            setValid({...valid,secondName:''})
            setUpdateUser((state)=>{
                return {
                    ...state,
                    secondName:value
                }
            })
        }else if(input === "email"){
            setValid({...valid,email:''})
            setUpdateUser((state)=>{
                return {
                    ...state,
                    email:value
                }
            })
        } else if(input === 'photo') {
            dispatch(setUserTC({...user,photo:value}))
        }
    }
    const sendUser = (input:string) =>{
       switch(input){
           case 'firstname' : {
               if(updateUser.firstName.length > 2) {
                    dispatch(setUserTC({...user,firstName:updateUser.firstName}))
               } else {
                setValid({
                    ...valid,
                    firstName:'Имя должно содержать больше 3х букв'
                })
               }
            break;
           }
           case 'secondname' : {
                if(updateUser.secondName.length > 2) {
                    dispatch(setUserTC({...user,secondName:updateUser.secondName}))
                } else {
                setValid({
                    ...valid,
                    secondName:'Фамилия должна содержать больше 3х букв'
                })
                }
            break;
            }
            case 'email' : {
                const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                console.log(reg.test(updateUser.email))
                if(reg.test(updateUser.email)) {
                    dispatch(setUserTC({...user,email:updateUser.email}))
                } else {
                setValid({
                    ...valid,
                   email:'Не верный Email'
                })
                }
            break;
            }
       }
    }
    console.log(user)
    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.container} >
                <View style={styles.avatar}>
                    <Avatar
                        rounded
                        size="xlarge"
                        title="Ph"
                        onPress={openModal}
                        activeOpacity={0.7}
                        source={{
                            uri: user.photo
                        }}
                    >
                         {/* <Avatar.Accessory {...accessoryProps} /> */}
                    </Avatar>   
                </View>
                <TouchableOpacity style={styles.input}>
                    <Input
                        label="Сменить имя"
                        placeholder="Ваше Имя"
                        onChangeText={name => changeInput(name,'firstname')}
                        value={updateUser.firstName}
                        defaultValue={user.firstName}
                        errorMessage={valid.firstName}
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='#ffffff'
                            />
                        }
                        labelStyle={{color:'#ffffff'}}
                        onBlur={()=>{sendUser('firstname')}}
                        
                    />
                </TouchableOpacity>
                <View style={styles.input}>
                    <Input
                        label="Сменить фамилию"
                        placeholder="Ваша фамилия"
                        onChangeText={name => changeInput(name,'secondname')}
                        defaultValue={user.secondName}
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='#ffffff'
                            />
                        }
                        labelStyle={{color:'#ffffff'}}
                        onBlur={()=>{sendUser('secondname')}}
                        errorMessage={valid.secondName}
                    />
                </View>
                <View style={styles.input}>
                    <Input
                        label="Email"
                        placeholder="Email"
                        onChangeText={email => changeInput(email,'email')}
                        defaultValue={user.email}
                        keyboardType='email-address'
                        // errorMessage = {valide.email}
                        leftIcon={
                            <Icon
                            name='envelope'
                            size={24}
                            color='#ffffff'
                            />
                        }
                        labelStyle={{color:'#ffffff'}}
                        onBlur={()=>{sendUser('email')}}
                        errorMessage={valid.email}
                    />
                </View>
                <Button
                    buttonStyle ={{...styles.input,margin:30}}
                    title='Сохранить'
                    onPress={()=>{}}
                    disabled={true}
                />
            </ScrollView>
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
                >
                    <ModalSetAvatar openModal={openModal} setPhoto={changeInput}/>
                </Modal>
            </View>
        </KeyboardAvoidingView>
    )
}