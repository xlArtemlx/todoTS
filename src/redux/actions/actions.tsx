import {AppActions} from '../types/actions'
import { Dispatch } from "redux";
import { AppState } from '../store/store';
import {ListType} from '../../interfaces/ListType'
import {User} from '../../interfaces/User'
import Storage from '../../services/Storage'

export const SET_LOADING = 'SET_LOADING'
export const SET_LIST = 'SET_LIST'
export const SET_USER = 'SET_USER'

export const setLoading = (loading:boolean):AppActions =>({type: SET_LOADING,loading})
export const setList = (list:ListType[]):AppActions =>({type: SET_LIST,list})
export const setUser =(user:User):AppActions =>({type:SET_USER,user})


export const setLoadingTC = (loading:boolean) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
    dispatch(setLoading(loading))
}
export const setListTC = (list:ListType[]) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
    dispatch(setList(list))
}
export const setUserTC = (user:User) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
     Storage.setStorage('@user',JSON.stringify(user))
    dispatch(setUser(user))
}


