import { Main } from "../../interfaces/Main"
import {
    SET_LOADING ,
} from '../actions/actions'
import {MainActionTypes} from '../types/actions'

const initialState:Main = {
    loading:false,
}

export const AppReducer = (state = initialState,action:MainActionTypes):Main =>{
    switch(action.type) {
        case SET_LOADING : {
            return {
                ...state,
                loading:action.loading
            }
        }
        default :
        return state
    }
}
