import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
    constructor() {
        
    }

    async  setStorage(key:string,value:any){
        try {
            await AsyncStorage.setItem(key, value)
          } catch (e) {
            console.log(e)
          }
    }

    async  getSorage(key:string){
        try {
            const value = await AsyncStorage.getItem(key)
            if(value !== null) {
              return value
            }
          } catch(e) {
            console.log(e)
          }
    }
        // return AsyncStorage.setItem()
}

export default new Storage();