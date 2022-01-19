import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";

import Icon3 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/Ionicons'; 
import Icon7 from 'react-native-vector-icons/Entypo';
import Icon8 from 'react-native-vector-icons/FontAwesome';
import Icon9 from 'react-native-vector-icons/MaterialIcons';

import ICON1 from 'react-native-vector-icons/Entypo'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons'
import ICON2 from 'react-native-vector-icons/MaterialCommunityIcons'
import ICON3 from 'react-native-vector-icons/Entypo'
import ICON4 from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Home extends Component{ 
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    render(){
        return(
            // <SafeAreaView style={{flex: 1,}}>
            //     <Text>Account</Text>
            //     <TouchableOpacity
            //       onPress={() => NavigationService.navigate(NAV_TYPES.INTRO)}
            //     >
            //       <Text>Logout</Text>
            //     </TouchableOpacity>
            // </SafeAreaView>

            <>
            <View style={{backgroundColor:"#307c32",height:175,}}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{backgroundColor:"#ffff",height:60, width:60,borderRadius:50,marginLeft:20,marginTop:35,}}>
                     <Icon3  
                        style={{marginTop:40,marginLeft:40 }}
                          name="camera" size={20} color="#0ed7e9"
                       />
                       <View style={{position:'absolute',}}>

                       </View>
                </TouchableOpacity>
                <View>
                  <View style={{flexDirection:'row', marginTop:50, marginLeft:10,}}>
                 <TouchableOpacity >
                    <Text  style={{marginTop:5, color:"white", fontSize:14,}}> 
                        Sovan Nareach
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                 <Icon1  
                    style={{marginLeft:5, }}
                    name="circle-edit-outline" size={28} color="white"
                  />
    
                </TouchableOpacity>
                  
                 </View>
                <View>
                    <Text style={{marginTop:2, fontSize:15, color:'#fff', marginLeft:10,}}>
                        010203040
                    </Text>
                 </View>
                </View>
              </View>


             <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:'center', marginLeft:-20}}>
                <TouchableOpacity style={{backgroundColor:"#fff",width:100, height:35,marginTop:15,marginLeft:20,borderRadius:5,alignItems:'center',}} onPress={()=>NavigationService.navigate(NAV_TYPES.LIKEGOODS)}> 
                  <Text style={{marginTop:5, fontSize:15,color:"black",}}>
                    ទំនិញចូលចិត្ត
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#fff",width:100, height:35,marginTop:15,marginLeft:20,borderRadius:5,alignItems:'center',}}  onPress={()=>NavigationService.navigate(NAV_TYPES.SHOPS)}>
                  <Text style={{marginTop:5, fontSize:15,color:"black",}}>
                    ហាងចូលចិត្ត
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#fff",width:100, height:35,marginTop:15,marginLeft:20,borderRadius:5,alignItems:'center',}}onPress={()=>NavigationService.navigate(NAV_TYPES.HISTORY)}>
                  <Text style={{marginTop:5, fontSize:15,color:"black",}}>
                    ប្រវត្តិ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            
                      <View style={{marginTop:50}}>
                        <View style={{flexDirection:'row',marginHorizontal:20,alignItems:'center',height:40,width:'86%',justifyContent:'center',marginBottom:20}}>
                            <ICON2 name="shield-key" size={40} color="#1e90ff" style={{marginRight:10}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:"88%",alignItems:'center',borderBottomColor:'#a9a9a9',borderBottomWidth:1,}} onPress={()=>NavigationService.navigate(NAV_TYPES.EDITPASSWORD)} >
                                <Text style={{}}>កែលេខសម្ងាត់</Text>
                                <ICON1 name="chevron-right" size={25} color="#808080"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginHorizontal:20,alignItems:'center',height:40,width:'86%',justifyContent:'center',marginBottom:20}}>
                            <ICON4 name="wallet" size={40} color="#ffa07a" style={{marginRight:10}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:"88%",alignItems:'center',borderBottomColor:'#a9a9a9',borderBottomWidth:1}} onPress={()=>NavigationService.navigate(NAV_TYPES.WALLET)} >
                                <Text>កាបូបលុយ</Text>
                                <ICON1 name="chevron-right" size={25} color="#808080"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginHorizontal:20,alignItems:'center',height:40,width:'86%',justifyContent:'center',marginBottom:20}}>
                            <ICON2 name="map-marker-radius-outline" size={40} color="#f0e68c" style={{marginRight:10}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:"88%",alignItems:'center',borderBottomColor:'#a9a9a9',borderBottomWidth:1}} onPress={()=>NavigationService.navigate(NAV_TYPES.ADDRESS)} >
                                <Text>អាស័យដ្ឋាន</Text>
                                <ICON1 name="chevron-right" size={25} color="#808080"/>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row',marginHorizontal:20,alignItems:'center',height:40,width:'86%',justifyContent:'center',marginBottom:20}}>
                            <ICON3 name="back-in-time" size={40} color="#696969" style={{marginRight:10}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:"88%",alignItems:'center',}} onPress={()=>NavigationService.navigate(NAV_TYPES.ADDRESS)} >
                                <Text>ប្រវត្តិការទិញ</Text>
                                <ICON1 name="chevron-right" size={25} color="#808080"/>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={{flexDirection:'row',marginHorizontal:20,alignItems:'center',height:40,width:'86%',justifyContent:'center',marginBottom:20}} >
                            <ICON3 name="back-in-time" size={40} color="#696969" style={{marginRight:10}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:"88%",alignItems:'center',}}   onPress={()=>NavigationService.navigate(NAV_TYPES.BUY)}>
                                <Text>ប្រវត្តិការទិញ</Text>
                                <ICON1 name="chevron-right" size={25} color="#808080"/>
                            </TouchableOpacity>
                        </View> */}

                      

                      </View>
                      




          <View style={{alignItems:'center', marginTop:40,}}>
              <View>
                <Image
                    style={{width:80, height:80}}
                    source={require('../Assets/Images/logo.png')}
                />
              </View>
              <View style={{alignItems:'center',}}>
                <Text style={{color:'gray', fontSize:15,}}>ជំនាន់ 1</Text>
                <Text style={{color:'gray',fontSize:15,}}>© រក្សាសិទ្ធគ្រប់យ៉ាងដោយ​ សាកសិនឆ្នាំ២០២១</Text>
              </View>
           </View>
             
         
           
            
           </>                   

        )
    }
}
const styles = StyleSheet.create({
  
});