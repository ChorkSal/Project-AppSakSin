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
  import SMSVerifyCode from 'react-native-sms-verifycode'
  import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";


class Editpassword extends Component {
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
           <View style={{alignItems:'center',marginLeft:80,}}>
                 <Text style={{fontSize:20, color:'white'}}>កែលេខសម្ងាត់</Text>
           </View>
           </View>
        </View>
       <View>

      <View style={{backgroundColor:'#ffffff'}}>
           <View style={{marginTop:30,}}>
            <View style={{alignItems:'center',}}>
                <Text style={{color:"#2e23c9", fontSize:20}}>បញ្ចូលលេខសម្ងាត់ដើម</Text>
            </View>
            <SMSVerifyCode
                verifyCodeLength={6}
                containerPaddingVertical={10}
                containerPaddingHorizontal={85}
                // containerBackgroundColor="white"
                // codeViewBorderColor="#000000"
                // focusedCodeViewBorderColor="#0000FF"
                codeViewBorderWidth={2}
                codeViewBorderRadius={16}
            />
        </View>
        <View style={{marginTop:30,}}>
            <View style={{alignItems:'center',}}>
                <Text style={{color:"#2e23c9", fontSize:20}}>បញ្ចូលលេខសម្ងាត់ថ្មី</Text>
            </View>
            <SMSVerifyCode
                verifyCodeLength={6}
                containerPaddingVertical={10}
                containerPaddingHorizontal={85}
                // containerBackgroundColor="#8DC647"
                // codeViewBorderColor="#000000"
                // focusedCodeViewBorderColor="#0000FF"
                codeViewBorderWidth={2}
                codeViewBorderRadius={16}
            />
        </View>
        <View style={{marginTop:30,}}>
            <View style={{alignItems:'center', }}>
                <Text style={{color:"#2e23c9", fontSize:20}}>បញ្ជាក់លេខសម្ងាត់ថ្មី</Text>
            </View>
            <SMSVerifyCode
                verifyCodeLength={6}
                containerPaddingVertical={10}
                containerPaddingHorizontal={85}
                // containerBackgroundColor="#8DC647"
                // codeViewBorderColor="#000000"
                // focusedCodeViewBorderColor="#0000FF"
                codeViewBorderWidth={2}
                codeViewBorderRadius={16}
            />
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:"#307c32", width:"90%",borderRadius:5, height:50, marginLeft:20,alignItems:'center', marginTop:50,}}>
                <Text style={{color:'white', fontSize:20, marginTop:10,}}>រួចរាល់</Text>
            </TouchableOpacity>
        </View>
       </View>
      </View> 
      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default Editpassword;