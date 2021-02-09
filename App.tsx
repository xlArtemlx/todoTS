import React,{useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {AppNavigation} from './src/screens/AppNavigation/AppNavigation'
import {Provider} from 'react-redux';
import store from "./src/redux/store/store";
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
       <Provider store ={store}>
        <SafeAreaProvider>
            <AppNavigation />
          </SafeAreaProvider>
        </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
