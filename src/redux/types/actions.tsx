import {
    SET_LOADING ,
    SET_LIST,
    SET_USER,
} from '../actions/actions'
import {ListType} from '../../interfaces/ListType'
import {User} from '../../interfaces/User'

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    loading: boolean;
}

export interface SetListAction {
  type: typeof SET_LIST;
  list: ListType[];
}
export interface SetUserAction {
  type: typeof SET_USER;
  user: User;
}

  export type MainActionTypes =

    | SetLoadingAction
    | SetListAction
    | SetUserAction

  
  export type AppActions = MainActionTypes;
