import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput,
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
import LottieView from'lottie-react-native';
export default class Bell extends Component{
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    render(){
        return(
            // <SafeAreaView style={{flex: 1,}}>
            //     <Text>Bell</Text>
            // </SafeAreaView>
          <>
          <View style={{backgroundColor:"#307c32",height:90,width:'100%', }}>
            <View style={{flexDirection:"row", marginTop:35, alignItems:'center'}}>
            
            <View style={{alignItems:'center',marginLeft:100,}}>
                  <Text style={{fontSize:20, color:'white', marginLeft:50,}}>សារជូនដំណឹង</Text>
            </View>
            </View>
         </View>
         <View style={{width:'80%',height:200,marginTop:'30%',marginLeft:50}}>
           
             <LottieView   style={{marginTop:10, width:200, height:200,marginLeft:30,}}
                source={require('./../Assets/Images/50432-notification-animation.json')} autoPlay loop />
          </View>
          
         <View style={{alignItems:'center', marginTop:"20%",}}>
             <Text style={{fontSize:20, color:'gray',}}>សំណព្វចិត្តអត់ទាន់មានសារជូនដំណឹងទេ!</Text> 
         </View>
          </>

        )
    }
}
const styles = StyleSheet.create({
  
});