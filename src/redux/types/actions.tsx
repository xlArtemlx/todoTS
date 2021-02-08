import {
    SET_LOADING ,
} from '../actions/actions'



export interface SetLoadingAction {
    type: typeof SET_LOADING;
    loading: boolean;
}


  
  export type MainActionTypes =

    | SetLoadingAction

  
  export type AppActions = MainActionTypes;
