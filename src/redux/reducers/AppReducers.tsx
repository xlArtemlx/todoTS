import { Main } from "../../interfaces/Main"

import {
    SET_LOADING ,
    SET_LIST,
} from '../actions/actions'
import {MainActionTypes} from '../types/actions'

const initialState:Main = {
    loading:false,
    list:[]
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
        default :
        return state
    }
}
