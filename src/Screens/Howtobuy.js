import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput, ScrollView,
} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";



export default class Howtobuy extends Component{
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
                        <TouchableOpacity onPress={()=>NavigationService.goBack()}>
                                <Text style={{fontSize:18, color:'white', marginLeft:20,}}>ត្រលប់</Text>
                        </TouchableOpacity>
                        <View style={{alignItems:'center',marginLeft:50,}}>
                                <Text style={{fontSize:20, color:'white',marginLeft:15,}}>របៀបទិញទំនិញ</Text>
                        </View>
                        </View>
                  </View>
                <View style={{marginTop:"50%",alignItems:'center',}}>
                    <Text style={{fontSize:18, color:'black', marginLeft:10,}}>មិនមែនការទិញ</Text>
                </View>
               
                
                    
                
            </>  
                            
          
        )
    }
}
const styles = StyleSheet.create({
   
  
});