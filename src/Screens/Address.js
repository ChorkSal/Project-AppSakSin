
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
  import Icon4 from 'react-native-vector-icons/MaterialIcons';
  import {NAV_TYPES} from "./../Navigation/navTypes";
  import NavigationService from "./../Service/navigationService";


class Address extends Component {
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
           <View style={{alignItems:'center',marginLeft:90,}}>
                 <Text style={{fontSize:20, color:'white'}}>អាស័យដ្ធាន</Text>
           </View>
           </View>
        </View>
        <View style={{alignItems:'center', marginTop:"50%",}}>
            <Text style={{fontSize:20, color:'blue',}}>មិនមែនអាស័យដ្ធានទេ!</Text> 
            <Text style={{fontSize:20, color:'blue',}}>សូមបញ្ចូលអាស៏យដ្ធានរបស់លោកអ្នក!</Text> 
        </View>
        
        <TouchableOpacity style={{backgroundColor:"#307c32",height:90,width:'100%', alignItems:'center',marginTop:355,}} onPress={()=>NavigationService.navigate(NAV_TYPES.ENTERADDRESS)}>  
          <View>
               <Icon4 
               style={{marginTop:10,}}
                 name="add-location" size={35} color="#a095a3"
              />
          </View>
           <View>
                 <Text style={{fontSize:20, color:'white'}}>បន្ថែមអាស័យដ្ធាន</Text>
           </View>
           
        </TouchableOpacity>
      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default Address;