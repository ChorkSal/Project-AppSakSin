import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
import LottieView from'lottie-react-native';
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    render(){
        return(
           <>

            <View style={{backgroundColor:"#307c32",height:90,width:'100%', }}>
            <View style={{flexDirection:"row", marginTop:35, alignItems:'center'}}>
            
            <View style={{alignItems:'center',marginLeft:100,}}>
                  <Text style={{fontSize:20, color:'white', marginLeft:80,}}>កន្ត្រក់</Text>
            </View>
                </View>
            </View>
            <View style={{width:'100%',height:200,marginTop:"40%",}}>
                <LottieView source={require('./../Assets/Images/36605-shopping-cart.json')} autoPlay loop />
            </View>
            <View style={{alignItems:'center', marginTop:"10%",}}>
                <Text style={{fontSize:25, color:'black',}}>សំណព្វចិត្តអត់ទាន់មានទំនិញសោះ!</Text> 
                <Text style={{fontSize:18, color:'gray',}}>រវល់ប៉ុណ្ណាក៏ត្រូវទិញទំនិញឲខ្លួនអែងដែរ</Text> 
            </View>
           </>
            
        )
    }
}
const styles = StyleSheet.create({
  
});