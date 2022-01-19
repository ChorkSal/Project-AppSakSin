
import React, { Component } from "react";
import { 
    Text, 
    View ,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
    
  } from "react-native";
  import Icon4 from 'react-native-vector-icons/MaterialIcons';

  import {NAV_TYPES} from "../Navigation/navTypes";
  import NavigationService from "../Service/navigationService";


class  EnterAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <View style={{backgroundColor:"#307c32",height:90,width:'100%', }}>
           <View style={{flexDirection:"row", marginTop:35, alignItems:'center'}} >
           <TouchableOpacity onPress={()=>NavigationService.goBack()}>
                 <Text style={{fontSize:18, color:'#e3ffe7', marginLeft:20,}}>ត្រលប់</Text>
           </TouchableOpacity>
           <View style={{alignItems:'center',marginLeft:100,}}>
                 <Text style={{fontSize:20, color:'#e3ffe7'}}>អាស័យដ្ធាន</Text>
           </View>
           </View>
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:20,marginTop:30, width:"90%", height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:20,}}
                    keyboardType="email-address"
                    placeholder="បញ្ចូលឈ្មោះ"
                />
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:20,marginTop:30, width:"90%", height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:20,}}
                    keyboardType="default"
                    placeholder="បញ្ចូលលេខទូស័ព្ទ"
                />
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:20,marginTop:30, width:"90%", height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
            <View style={{flexDirection:'row',}}>
                
                <View>
                     <TextInput
                        style={{fontSize:16,marginLeft:20, color:'black',}}
                        keyboardType="email-address"
                        placeholder="ជ្រើសរើសអាស័យដ្ធាន"
                    /> 
                 </View>
                 <TouchableOpacity onPress={()=>NavigationService.navigate(NAV_TYPES.ADDADDRESS)}>
                        <Icon4  
                            style={{marginLeft:5,}}
                        name="keyboard-arrow-right" size={40} color="black"
                        />
                    </TouchableOpacity>
                
            </View>
           
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:20,marginTop:30, width:"90%", height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:20,}}
                    keyboardType="default"
                    placeholder="ផ្ទះលេខ លេខផ្លូវ ឬអាស័យដ្ធានលំអិត"
             />
          
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:20,}}>
              <Text  style={{fontSize:16,marginLeft:40,marginTop:25,color:'black'}}>ទីតាំង:</Text>
            </View>
            <View style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:40, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
                <TextInput
                        style={{fontSize:16,marginLeft:10,}}
                        keyboardType="email-address"
                        placeholder="ផ្ទះ"
                    />
            </View>
            <View style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:65, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:10,}}
                    keyboardType="email-address"
                    placeholder="សាលា"
                />
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:75, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:10,}}
                    keyboardType="email-address"
                    placeholder="ក្រុមហ៊ុន"
                />
        </View>
        <View style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:65, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
             <TextInput
                    style={{fontSize:16,marginLeft:10,alignItems:'center'}}
                    keyboardType="email-address"
                    placeholder="ផ្សេងៗ"
                />
        </View>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:"#307c32", width:"90%",borderRadius:5, height:50, marginLeft:20,alignItems:'center', marginTop:50,}}>
                <Text style={{color:'white', fontSize:20, marginTop:10,}}>បន្ត</Text>
            </TouchableOpacity>
        </View>
      
      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default EnterAddress;