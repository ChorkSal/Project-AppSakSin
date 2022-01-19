
import React, { Component } from "react";
import { 
    Text, 
    View ,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    
  } from "react-native";
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Iconb from 'react-native-vector-icons/AntDesign';

import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";


class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
      <View style={{backgroundColor:'#307c32',width:"100%",height:260, }}>
        <View style={{flexDirection:"row",}}>
           <TouchableOpacity onPress={()=>NavigationService.goBack()}>
            <Text style={{marginTop:50,fontSize:19,marginLeft:10, color:'white'}} >ត្រលប់</Text>
           </TouchableOpacity>
           <View style={{backgroundColor:"#fff", width:"75%",height:45,borderRadius:5,marginTop:40,marginLeft:10,}}>
            <TouchableOpacity>
           
              <TextInput
                    style={{fontSize:18,color:"gray",marginLeft:10,}}
                    keyboardType="email-address"
                    placeholder="ស្វែងរក"
                />
            </TouchableOpacity>
        </View>
        
        </View>
        <View style={{marginTop:5,marginLeft:5,flexDirection:'row'}}>
           <View style={{width:70, height:70,borderRadius:50,borderColor:'#fff',backgroundColor:'#fff', borderTopWidth:1,}}> 
              <Image
                   style={{width:60, height:60,marginTop:5,marginLeft:5,}}
                  source={require('../Assets/Images/logo.png')}
               />
           </View>
            <View style={{marginLeft:5,marginTop:25,}}>
            <Text style={{fontSize:15 ,color:"white",}}>
                Ladies's Beauty
            </Text>
            <Text style={{fontSize:15 ,color:"white",}}>
              ចំនួនអតិថិជន៖ 2 នាក់
            </Text>
            </View>

            <TouchableOpacity style={{backgroundColor:'#ffffff',borderRadius:5, width:80,height:35, alignItems:'center',marginTop:30,marginLeft:90,}} onPress={()=>NavigationService.navigate(NAV_TYPES.SA)}>
              <Text style={{fontSize:15 ,color:"black",marginTop:5}}>
                ផ្ញេីសារ
              </Text>
            </TouchableOpacity >
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:15}}> 
          <TouchableOpacity  style={{backgroundColor:'#61ae5e', width:110, height:45,borderRadius:5,marginLeft:10,}} onPress={()=>NavigationService.navigate(NAV_TYPES.LIKEGOODS)}>
            <Text style={{marginTop:10,fontSize:16, color:'black',marginLeft:16}}>ទិញទាំងអស់</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{backgroundColor:'#ffffff', width:110, height:45,borderRadius:5,marginLeft:10,}}>
            <Text style={{marginTop:10,marginLeft:22,fontSize:16,color:'black',}}>ទំនិញមកថ្មី</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{backgroundColor:'#ffffff', width:110, height:45,borderRadius:5,marginLeft:10,}}>
            <Text style={{marginTop:10,marginLeft:15,fontSize:16,color:'black',}}>ទំនិញលក់ដាច់</Text>
          </TouchableOpacity>
        </View>
       
     </View>
     {/* <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center', marginLeft:-10,}}>
        <View style={{backgroundColor:'#ffffff', width:"49%", height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
            <View style={{flexDirection:'row',}}>
                <View>
                <Image
                 style={{marginTop:10, width:40, height:40,borderColor:'#e4e4e4', borderWidth:1,borderRadius:50,marginLeft:10,}}
                  source={require('../Assets/Images/mat1.jpg')}
                />
                </View>
                <View style={{marginTop:10,marginLeft:5,}}>
                    <Text style={{fontSize:15, color:'black' , fontWeight:'bold',}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                    <Text style={{fontSize:14, color:"gray",marginTop:10,}}>មួយខែមុន</Text>
               </View>
            </View>
            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
            <View>
             <Image
                 style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                source={require('../Assets/Images/11.jpg')}
                />
                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>100 រ</Text>
                    </View>
              </View>
              <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>២ ចូលចិត្ត</Text></View>
                <View style={{flexDirection:'row', }}>
                <View style={{flexDirection:"row", marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                     <Iconb 
                        style={{marginLeft:15,}}
                        name="like1" size={20} color="#b8b8b8"
                     />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ចូលចិត្ត</Text> 
                  </View>
                     
                    
                </View>
                <View style={{flexDirection:"row",  marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                    <Icon4 
                      style={{marginLeft:15,}}
                        name="store" size={30} color="#bdbdbd"
                    />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ហាង</Text> 
                  </View>
                     
                    
                </View>
                </View>

            </View>

            <View style={{backgroundColor:'#ffffff', width:"49%", height:432,marginTop:30,marginLeft:8,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
            <View style={{flexDirection:'row',}}>
                <View>
                <Image
                 style={{marginTop:10, width:40, height:40,borderColor:'#e4e4e4', borderWidth:1,borderRadius:50,marginLeft:10,}}
                  source={require('../Assets/Images/mat1.jpg')}
                />
                </View>
                <View style={{marginTop:10,marginLeft:5,}}>r
                    <Text style={{fontSize:15, color:'black' , fontWeight:'bold',}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                    <Text style={{fontSize:14, color:"gray",marginTop:10,}}>មួយខែមុន</Text>
               </View>
            </View>
            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
            <View>
             <Image
                 style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                source={require('../Assets/Images/tu.jpg')}
                />
                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>200 រ</Text>
                </View>
              </View>
              <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>២ ចូលចិត្ត</Text></View>
                <View style={{flexDirection:'row', }}>
                <View style={{flexDirection:"row", marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                     <Iconb 
                        style={{marginLeft:15,}}
                        name="like1" size={20} color="#b8b8b8"
                     />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ចូលចិត្ត</Text> 
                  </View>
                     
                    
                </View>
                <View style={{flexDirection:"row",  marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                    <Icon4 
                      style={{marginLeft:15,}}
                        name="store" size={30} color="#bdbdbd"
                    />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ហាង</Text> 
                  </View>
                     
                    
                </View>
                </View>

        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center', marginLeft:-10,}}>
        <View style={{backgroundColor:'#ffffff', width:"49%", height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
            <View style={{flexDirection:'row',}}>
                <View>
                <Image
                 style={{marginTop:10, width:50, height:50,borderColor:'#e4e4e4', borderWidth:1,borderRadius:50,marginLeft:10,}}
                  source={require('../Assets/Images/mat1.jpg')}
                />
                </View>
                <View style={{marginTop:10,marginLeft:5,}}>
                    <Text style={{fontSize:15, color:'black' , fontWeight:'bold',}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                    <Text style={{fontSize:14, color:"gray",marginTop:10,}}>មួយខែមុន</Text>
               </View>
            </View>
            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
            <View>
             <Image
                 style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                source={require('../Assets/Images/12.jpg')}
                />
                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>300 រ</Text>
                    </View>
              </View>
              <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>២ ចូលចិត្ត</Text></View>
                <View style={{flexDirection:'row', }}>
                <View style={{flexDirection:"row", marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                     <Iconb 
                        style={{marginLeft:15,}}
                        name="like1" size={20} color="#b8b8b8"
                     />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ចូលចិត្ត</Text> 
                  </View>
                     
                    
                </View>
                <View style={{flexDirection:"row",  marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                    <Icon4 
                      style={{marginLeft:15,}}
                        name="store" size={30} color="#bdbdbd"
                    />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ហាង</Text> 
                  </View>
                     
                    
                </View>
                </View>

            </View>

            <View style={{backgroundColor:'#ffffff', width:"49%", height:432,marginTop:30,marginLeft:8,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
            <View style={{flexDirection:'row',}}>
                <View>
                <Image
                 style={{marginTop:10, width:50, height:50,borderColor:'#e4e4e4', borderWidth:1,borderRadius:50,marginLeft:10,}}
                  source={require('../Assets/Images/mat1.jpg')}
                />
                </View>
                <View style={{marginTop:10,marginLeft:5,}}>
                    <Text style={{fontSize:15, color:'black' , fontWeight:'bold',}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                    <Text style={{fontSize:14, color:"gray",marginTop:10,}}>មួយខែមុន</Text>
               </View>
            </View>
            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
            <View>
             <Image
                 style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                source={require('../Assets/Images/13.jpg')}
                />
                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>400 រ</Text>
                    </View>
              </View>
              <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>២ ចូលចិត្ត</Text></View>
                <View style={{flexDirection:'row', }}>
                <View style={{flexDirection:"row", marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                     <Iconb 
                        style={{marginLeft:15,}}
                        name="like1" size={20} color="#b8b8b8"
                     />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ចូលចិត្ត</Text> 
                  </View>
                     
                    
                </View>
                <View style={{flexDirection:"row",  marginTop:20,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
                    <TouchableOpacity>
                    <Icon4 
                      style={{marginLeft:15,}}
                        name="store" size={30} color="#bdbdbd"
                    />
                  </TouchableOpacity>
                  <View>
                      <Text style={{fontSize:15, color:'gray',marginLeft:5,}}>ហាង</Text> 
                  </View>
                     
                    
                </View>
                </View>

        </View>
        </View>
        <View style={{height:100,}}>
            <Text style={{fontSize:18, color:"#18401d",marginTop:30,marginLeft:130,}}>*ទិន្ន័យបានបង្ហាញអស់​! ​*</Text>
       </View>
     </ScrollView> */}
    
    
     
 
     
     
        
       
      </>   
    );
  }
}

const styles = StyleSheet.create({
 
});

export default Join;