import {
    SET_LOADING ,
    SET_LIST,
} from '../actions/actions'
import {ListType} from '../../interfaces/ListType'

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    loading: boolean;
}

export interface SetListAction {
  type: typeof SET_LIST;
  list: ListType[];
}

  export type MainActionTypes =

    | SetLoadingAction
    | SetListAction

  
  export type AppActions = MainActionTypes;
