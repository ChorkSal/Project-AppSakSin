import React from 'react'
import {View,Image,StyleSheet,Text,Platform,TouchableOpacity} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {NAV_TYPES} from './navTypes'
import NavigationService from "./../Service/navigationService";
import screenLogin from './../Container/LoginContainer'
import screenHome from '../Container/HomeContainer'
import screenAccount from '../Container/AccountContainer'
import screenShop from '../Container/ShopContainer'
import screenBell from './../Container/BellContainer'
import screenShoppingcart from '../Container/ShoppingcartContainer'
import ScreenEditpassword from './../Container/EditpasswordContainer'
import ScreenWallet from './../Container/WalletContainer'
import ScreenAddress from './../Container/AddressContainer'
import ScreenBuy from './../Container/BuyContainer'
import ScreenSa from './../Container/SaContainer'
import ScreenShops from '../Container/ShopsContainer'
import ScreenLikegoods from '../Container/LikegoodsContainer'
import ScreenHistory from '../Container/HistoryContainer'
import ScreenEnteraddress from '../Container/EnteraddressContainer'
import ScreenHistorybuy from '../Container/HistorybuyContainer'
import ScreenHowtobuy from '../Container/HowtobuyContainer'
import ScreenAddaddress from '../Container/AddaddressContainer'
import ScreenJoin from '../Container/JoinContainer'

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';


const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]:{
            screen:screenLogin,
            navigationOptions:{
                headerShown:false
            },
        },
  
    },
    {
        initialRouteName:NAV_TYPES.LOGIN
    }
)

//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.HOME_TAB]:{
            screen:screenHome,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <View>
                          <Icon  style={{marginLeft:25,}} name="home" size={30} color="#bebebe" />
                         <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>ទំព័រដើម</Text>
                    </View>
                   
                ),
            }
        },
        
        //SHOP
        [NAV_TYPES.SHOP_TAB]:{
            screen:screenShop,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <View>
                         <Icon1  style={{marginLeft:25,}} name="store" size={30} color="#bebebe" />
                         <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>ហាង</Text>
                    </View>
                  ),
                  
            }
        },
        //BELL
        [NAV_TYPES.BELL_TAB]:{
            screen:screenBell,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                  
                    <View>
                         <Icon2   style={{marginLeft:25,}} name="bell" size={30} color="#bebebe" />
                         <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>កណ្តឹង</Text>
                    </View>
                ),
            }
        },
        //Shoppingcart
        [NAV_TYPES.SHOPPINGCART_TAB]:{
            screen:screenShoppingcart,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                   
                    <View>
                           <Icon1  style={{marginLeft:25,}} name="local-grocery-store" size={30} color="#bebebe" />
                          <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>កន្ត្រក់</Text>
                    </View>
                ),
            }
        },
        //Account
        [NAV_TYPES.ACCOUNT_TAB]:{
            screen:screenAccount,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                   
                    <View>
                        <Icon3  style={{marginLeft:25,}} name="user-circle" size={30} color="#bebebe" />
                         <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>ខ្ញុំ</Text>
                    </View>
                ),
            }
        },
    },
  
    
    {
        tabBarOptions: {
          showIcon: true,
          showLabel:true,
          labelStyle: {
            fontSize: 20,
          },
          style:{height:Platform.OS==='ios'?55:60,paddingBottom:Platform.OS==='ios' ? 20 : 10},
          activeColor:'blue',
            activeTabStyle:{backgroundColor:'blue'},
        },
    }

)
const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.HOME]:{
            screen:TabNavigation,
            navigationOptions: {
                headerShown:false
              }
        },
        [NAV_TYPES.EDITPASSWORD]:{
            screen:ScreenEditpassword,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.WALLET]:{
            screen:ScreenWallet,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.ADDRESS]:{
            screen:ScreenAddress,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.BUY]:{
            screen:ScreenBuy,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.SA]:{
            screen:ScreenSa,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.SHOPS]:{
            screen:ScreenShops,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.LIKEGOODS]:{
            screen:ScreenLikegoods,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.HISTORY]:{
            screen:ScreenHistory,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.ENTERADDRESS]:{
            screen:ScreenEnteraddress,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.HISTORYBUY]:{
            screen:ScreenHistorybuy,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.HOWTOBUY]:{
            screen:ScreenHowtobuy,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.JOIN]:{
            screen:ScreenJoin,
            navigationOptions: {
                headerShown:false
            }
        },
        [NAV_TYPES.ADDADDRESS]:{
            screen:ScreenAddaddress,
            navigationOptions: {
                headerShown:false
            }
        },

    },
    {
        initialRouteName:NAV_TYPES.HOME
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]:{
            screen:IntroNavigator,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CORE]:{
            screen:CoreNavigation,
            navigationOptions:{
                headerShown:false
            }
        },
    },
    
    {
        initialRouteName:NAV_TYPES.CORE
    }
)
export default createAppContainer(MainNavigation)