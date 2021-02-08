import {AppActions} from '../types/actions'
import { Dispatch } from "redux";
import { AppState } from '../store/store';

export const SET_LOADING = 'SET_LOADING'

export const setLoading = (loading:boolean):AppActions =>({type: SET_LOADING,loading})


export const setLoadingTC = (loading:boolean) => async (dispatch: Dispatch<AppActions>,getState: () => AppState) => {
    dispatch(setLoading(loading))
}


