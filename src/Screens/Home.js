import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput, ScrollView,
} from 'react-native';
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
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
                <View style={{backgroundColor:'#307c32',flexDirection:'row', width:"100%", height:110,}}>
                <View>
                     <Image
                        style={{marginTop:30, width:60, height:60,}}
                        source={require('../Assets/Images/logo.png')}
                        />
                     </View>  
                     <View style={{backgroundColor:"#ffffff", width:"70%", height:45,  borderRadius:5, marginTop:35, flexDirection:'row', justifyContent:"space-between",}}>
                        <TouchableOpacity>
                        
                            <TextInput
                                    style={{fontSize:18,marginLeft:10, color:'gray',}}
                                    keyboardType=""
                                    placeholder="ស្វែងរក"
                                />
                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon1
                            style={{marginTop:12,marginRight:10,}}
                            name="search" size={20} color="gray"/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>NavigationService.navigate(NAV_TYPES.SA)}>
                            <Icona 
                            style={{marginTop:45, marginLeft:10,}}
                            name="chatbox-ellipses-outline" size={30} color="black"/>
                    </TouchableOpacity>
                </View> 
               <ScrollView>
                    <View>
                        <SwiperFlatList
                            // autoplay
                            // autoplayDelay={2}
                            autoplayLoop
                            // index={2}
                            // showPagination
                            >
                        
                            <View style={styles.child}>
                                <Image
                                    style={styles.slide}
                                    source={require('../Assets/Images/s3.jpg')}
                                />
                            </View>
                            <View style={styles.child}>
                                <Image
                                    style={styles.slide}
                                    source={require('../Assets/Images/s4.jpg')}
                                />
                            </View>
                            <View style={styles.child}>
                                <Image
                                    style={styles.slide}
                                    source={require('../Assets/Images/s5.jpg')}
                                />
                            </View>
                            <View style={styles.child}>
                                <Image
                                    style={styles.slide}
                                    source={require('../Assets/Images/s6.jpg')}
                                />
                            </View>
                            <View style={styles.child}>
                                <Image
                                style={styles.slide}
                                    source={require('../Assets/Images/s7.jpg')}
                                />
                            </View>
                            <View style={styles.child}>
                                <Image
                                    style={styles.slide}
                                    source={require('../Assets/Images/s8.png')}
                                />
                            </View> 
                            </SwiperFlatList> 
                          </View>
                         <View  style={{ height:260,marginTop:5,}}> 
                                <ScrollView horizontal={true} >
                                <View>
                                    <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/p2.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>គ្រឿងសង្ហាររឹម</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/p4.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>សំលៀកបំពាក់</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/p5.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>កុងព្យូទ័រ PC</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/p6.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>គ្រឿទេស</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/11.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:5,}}>ខោអាវ</Text>
                                        </TouchableOpacity>
                                    
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/c.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>គ្រឿងអលង្គារ</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/b.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>Note Book</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/14.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>អាវករវែង</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/12.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:3,}}>អាវកូនក្មេង</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginTop:20, alignItems:'center', width:100, height:100,}}>

                                            <Image
                                                    style={{width:70, height:70,borderRadius:60,borderWidth:1, borderColor:"#b7b7b7", }}
                                                    source={require('../Assets/Images/D.jpg')}
                                                />
                                            <Text style={{fontSize:13, marginLeft:16,marginTop:5,}}>សម្ភាះផ្ទះបាយ</Text>
                                        </TouchableOpacity>
                                    
                                    </View>

                                    
                                </View >
                            </ScrollView> 
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center', backgroundColor:'#afafa', marginTop:5, width:"100%",}}>
                            <TouchableOpacity style={{backgroundColor:'#ffffff', width:"48%", height:205, alignItems:'center', borderWidth:1, borderRadius:5, borderColor:"#e4e4e4"}} onPress={()=>NavigationService.navigate(NAV_TYPES.WALLET)}>
                                    <Icon 
                                        style={{marginTop:40}}
                                        name="wallet-outline" size={100} color="#fbbd06"
                                    />
                                    <Text style={{ fontSize:16, color:'black',}}>កាបូបលុយ</Text>
                                </TouchableOpacity >
                            <View >
                                <TouchableOpacity style={{backgroundColor:'#ffffff',flexDirection:'row', width:"100%",height:101,borderRadius:5, borderWidth:1,borderColor:"#e4e4e4", alignItems:'center',}} onPress={()=>NavigationService.navigate(NAV_TYPES.HOWTOBUY)}>
                                        <Icon2 
                                        style={{marginLeft:18}}
                                            name="shopping-basket-add" size={40} color="#457bdf"
                                        />
                                        <Text style={{marginLeft:3,fontSize:16, color:'black'}}>របៀបទិញទំនិញ</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:'#ffffff',marginTop:3, flexDirection:'row', width:190,height:101,borderRadius:5, borderWidth:1,borderColor:"#e4e4e4", alignItems:'center',}} onPress={()=>NavigationService.navigate(NAV_TYPES.HISTORYBUY)}>
                                        <Icon3 
                                            style={{marginLeft:20}}
                                            name="back-in-time" size={40} color="#c54b46"
                                        />
                                        <Text style={{marginLeft:5,fontSize:16, color:'black'}}>ប្រតិបត្តិការទិញ</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:18, color:"#18401d",marginTop:30,marginLeft:130,}}>* ទំនិញសម្រាប់អ្នក ​*</Text>
                        </View>
                       
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
                                <View style={{flexDirection:'row',marginTop:10, }}>
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
    slide:{
        width:420,
        height:190,
    },
  
});