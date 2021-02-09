import {AppActions} from '../types/actions'
import { Dispatch } from "redux";
import { AppState } from '../store/store';
import {ListType} from '../../interfaces/ListType'

export const SET_LOADING = 'SET_LOADING'
export const SET_LIST = 'SET_LIST'

export const setLoading = (loading:boolean):AppActions =>({type: SET_LOADING,loading})
export const setList = (list:ListType[]):AppActions =>({type: SET_LIST,list})


export const setLoadingTC = (loading:boolean) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
    dispatch(setLoading(loading))
}
export const setListTC = (list:ListType[]) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
    dispatch(setList(list))
}


