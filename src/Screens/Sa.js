
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
  
  import LottieView from'lottie-react-native';
  import {NAV_TYPES} from "./../Navigation/navTypes";
  import NavigationService from "./../Service/navigationService";



class Buy extends Component {
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
           <View style={{alignItems:'center',marginLeft:120,}}>
                 <Text style={{fontSize:20, color:'white'}}>សារ</Text>
           </View>
           </View>
        </View>
          <View>
                <View style={{width:'100%',height:200,marginTop:"40%",}}>
                    <LottieView source={require('./../Assets/Images/40413-message-v-2.json')} autoPlay loop />
                </View>
                <View style={{alignItems:'center',marginTop:"5%",}}>
                    <Text style={{color:'black', fontSize:19,marginTop:50,}}>មិនមានការឆាតទេ!</Text>
                </View>

         </View>
        
      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default Buy;