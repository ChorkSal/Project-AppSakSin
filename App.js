import React,{Component} from 'react'
import{
  View,
} from 'react-native'
import { Provider } from 'react-redux';
import store from './src/Store'
import Navigation from './src/Navigation/index'
import NavigationService from './src/Service/navigationService'
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
          <Navigation
            ref={navigatorRef =>
              NavigationService.setTopLevelNavigator(navigatorRef)
            }
          />
          {/* <Login /> */}
          {/* <Home /> */}
        </View>
      </Provider>
    );
  }
}