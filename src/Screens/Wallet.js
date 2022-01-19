
import React, { Component } from "react";
import { 
    Text, 
    View ,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
    
  } from "react-native";
  import {NAV_TYPES} from "./../Navigation/navTypes";
  import NavigationService from "./../Service/navigationService";


class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <View style={{backgroundColor:"#307c32",height:90,width:'100%', }}>
           <View style={{flexDirection:"row", marginTop:35, alignItems:'center'}}>
           <TouchableOpacity onPress={()=>NavigationService.goBack()}> 
                 <Text style={{fontSize:18, color:'white', marginLeft:20,}}>ត្រលប់</Text>
           </TouchableOpacity>
           <View style={{alignItems:'center',marginLeft:100,}}>
                 <Text style={{fontSize:20, color:'white'}}>កាបូបលុយ</Text>
           </View>
           </View>
        </View>
        <View style={{alignItems:'center',marginTop:20,backgroundColor:'#ffffff',width:"90%",marginLeft:20, height:200,}}>
            <Text style={{color:'red', fontSize:30,marginTop:20,}}>លុយ</Text>
            <Text style={{color:'red', fontSize:30,marginTop:20,}}>០៛</Text>
            <Text style={{color:'gray', fontSize:20,marginTop:10,}}>លេខគណនី:ATM288</Text>
        </View>
        <View>
            <Text style={{color:'black',fontSize:19,marginLeft:"35%", marginTop:30,}}>មិនមានទិន្ន័យ</Text>
        </View>

      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default Wallet;