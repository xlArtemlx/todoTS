import {ListType} from '../interfaces/ListType'
export interface Main {
    loading:boolean,
    list:ListType[],
    user:{
        firstName:string,
        secondName:string,
        email:string,
        photo:string,
    }
}
