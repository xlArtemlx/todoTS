import { Main } from "../../interfaces/Main"

import {
    SET_LOADING ,
    SET_LIST,
    SET_USER,
} from '../actions/actions'
import {MainActionTypes} from '../types/actions'

const initialState:Main = {
    loading:false,
    list:[],
    user:{
        firstName:'',
        secondName:'',
        email:'',
        photo:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    }
}

export const AppReducer = (state = initialState,action:MainActionTypes) =>{
    switch(action.type) {
        case SET_LOADING : {
            return {
                ...state,
                loading:action.loading
            }
        }
        case SET_LIST : {
            return {
                ...state,
                list:action.list
            }
        }
        case SET_USER : {
            return {
                ...state,
                user:action.user
            }
        }
        default :
        return state
    }
}
