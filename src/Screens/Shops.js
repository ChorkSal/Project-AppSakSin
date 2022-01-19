import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
import LottieView from'lottie-react-native';
export default class Shop extends Component{
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    render(){
        return(
          
            <>
                 <View style={{ backgroundColor:'#307c32',height:140,  width:'100%',}}>

                        <TouchableOpacity style={{marginLeft:20,backgroundColor:'#fff',width:"90%",height:45,marginTop:40,borderRadius:5,}}>
                        <TextInput
                                style={{fontSize:20,marginLeft:10,}}
                                keyboardType="number-pad"
                                placeholder="ស្វែងរក"
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:10,}}>
                        <View >
                            <TouchableOpacity  onPress={()=>NavigationService.goBack()}>
                            <Text  style={{fontSize:20, color:'white',marginTop:5,}} >ហាងទាំងអស់</Text>
                            </TouchableOpacity>
                        </View>
                            <View style={{backgroundColor:'#61ae5e', height:40, width:150,alignItems:"center", borderRadius:5,}}>
                                <TouchableOpacity>
                                  <Text style={{fontSize:20, color:'white',marginTop:5,}} >ហាងចូលចិត្ត</Text>
                                </TouchableOpacity>   
                            </View>
                            
                        </View>

                 </View>
                        <View style={{width:'100%',height:200,marginTop:"40%",}}>
                            <LottieView source={require('./../Assets/Images/78743-fr-store.json')} autoPlay loop />
                        </View>

                        <View style={{alignItems:'center', marginTop:5,}}>
                            <Text style={{fontSize:20, color:'gray',}}>មិនមានហាងដែលអ្នកចូលចិត្ត!</Text> 
                 </View>
            </>

        
        )
    }
}
const styles = StyleSheet.create({
  
});
