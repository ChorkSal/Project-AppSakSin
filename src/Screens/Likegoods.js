import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput, ScrollView,
} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icona from 'react-native-vector-icons/Ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Iconb from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';


export default class Home extends Component{
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
                                <Text style={{fontSize:20, color:'white'}}>ទំនិញដែលអ្នកចូលចិត្ត</Text>
                        </View>
                        </View>
                        </View>
               <ScrollView>
                       
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center', marginLeft:-10,}}>
                        <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/sp.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៤ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/tu.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>300 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>15 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                        <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat5.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៣ ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/16.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>500 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>10 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                        <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat3.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៤ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/v1.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>300 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>15 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                        <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat1.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៣ ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/12pro.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>500 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>10 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                          <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat3.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៤ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/v1.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>300 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>15 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                            <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,marginLeft:10,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat1.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៣ ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/12pro.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>500 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>10 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                         <View style={{backgroundColor:'#ffffff', width:200, height:432,marginTop:30,borderColor:'#e4e4e4', borderWidth:1,borderRadius:5,}}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                <Image
                                style={{marginTop:10, width:50, height:50,borderColor:'#b8b8b8', borderWidth:1,borderRadius:50,marginLeft:10,}}
                                source={require('../Assets/Images/mat1.jpg')}
                                />
                                </View>
                                <View style={{marginTop:10,marginLeft:5,}}>
                                    <Text style={{fontSize:15, color:'black' ,}}>ម៉ាតនិងហាងទំនិញតូចៗ</Text>
                                    <Text style={{fontSize:14, color:"gray",marginTop:5,}}>៣ ខែមុន</Text>
                            </View>
                            </View>
                            <Text style={{fontSize:15, color:"black", marginLeft:20,marginTop:30,}}>abc</Text>
                            <View>
                            <Image
                                style={{marginTop:30, width:100, height:200,marginLeft:48,}}
                                source={require('../Assets/Images/12pro.jpg')}
                                />
                                <View style={{position:"absolute",backgroundColor:'#005102',width:60, height:32, marginTop:10,marginLeft:5, alignItems:'center',borderRadius:50, }}>
                                    <Text style={{fontSize:16, color:'white',marginTop:5,}}>500 រ</Text>
                                    </View>
                            </View>
                            <View style={{marginTop:10,marginLeft:20,}}><Text style={{fontSize:15,color:'gray',}}>10 ចូលចិត្ត</Text></View>
                                <View style={{flexDirection:'row', }}>
                                <View style={{flexDirection:"row", marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                                <View style={{flexDirection:"row",  marginTop:10,borderColor:"#b8b8b8",borderWidth:1,width:"50%",height:40, alignItems:'center',}}>
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
                    
                </ScrollView> 
               
                
                    
                
            </>  
                            
          
        )
    }
}
const styles = StyleSheet.create({
   
  
});