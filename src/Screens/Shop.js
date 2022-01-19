
import React, { Component } from "react";
import { 
    Text, 
    View ,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
    // titleA,
    
  } from "react-native";
import Icon1 from 'react-native-vector-icons/AntDesign';
  import Icon4 from 'react-native-vector-icons/MaterialIcons';
  import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/Entypo';
  import Icon8 from 'react-native-vector-icons/FontAwesome';
  import Icon9 from 'react-native-vector-icons/MaterialIcons';
  import {NAV_TYPES} from "./../Navigation/navTypes";
  import NavigationService from "./../Service/navigationService";

 


class Shops extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
      
        <View style={{ backgroundColor:'#307c32',height:140,  width:'100%',}}>

<TouchableOpacity style={{marginLeft:20,backgroundColor:'#fff',width:"90%",height:45,marginTop:37,borderRadius:5,marginLeft:20,}}>
<TextInput
        style={{fontSize:20,marginLeft:10,}}
        keyboardType="number-pad"
        placeholder="ស្វែងរក"
    />
</TouchableOpacity>
<View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:10,}}>
<View style={{backgroundColor:'#61ae5e', height:40, width:150,alignItems:"center", borderRadius:5,}}>
    <TouchableOpacity   onPress={()=>NavigationService.navigate(NAV_TYPES.SHOPS)}>
    <Text  style={{fontSize:20, color:'white',marginTop:5,}} >ហាងទាំងអស់</Text>
    </TouchableOpacity>
</View>
    <View>
        <TouchableOpacity  onPress={()=>NavigationService.navigate(NAV_TYPES.SHOPS)}>
          <Text style={{fontSize:20, color:'white',marginTop:8,}} >ហាងចូលចិត្ត</Text>
        </TouchableOpacity>   
    </View>
    
</View>

</View>
       <ScrollView>
         <View style={styles.containerA}>
            <View>
              <Image
                style={{width:50, height:50,marginLeft:10, marginTop:10, borderWidth:1, borderColor:'#cccccc',  borderRadius:50,}}
                source={require('../Assets/Images/logo.png')} 
                />
            </View>
          <View style={styles.containerB}>
            <View style={styles.text}>
                <View style={{marginTop:5,}}>
                    <Text style={styles.txtB}>រស្មីរមានជ័យ</Text>
                    <Text style={styles.txtC}>អថិជន៖១៨ នាក់</Text>
                </View>
                <TouchableOpacity style={{marginTop:5,marginLeft:"50%",}}>
                   <Icon1 name="heart" size={30} color="red"/>
               </TouchableOpacity>
               
              </View>
           <View/>  
           
           <TouchableOpacity style={{backgroundColor:'#307c32', width:220, height:40,borderRadius:5,marginTop:30,marginLeft:12,}} onPress={()=>NavigationService.navigate(NAV_TYPES.JOIN)}>
                <Text style={{marginTop:5,marginLeft:52,fontSize:18, color:'white',}}>ចូលទៅកាន់ហាង</Text>
           </TouchableOpacity>
        
          </View>
        
       </View>
       <View style={styles.containerb}>
           <View>
              <Image
                style={{width:50, height:50,marginLeft:10, marginTop:10, borderWidth:1, borderColor:'#cccccc',  borderRadius:50,}}
                source={require('../Assets/Images/Mat.jpg')} 
                />
            </View>
            
          <View >
             <View style={{flexDirection:'row' , alignItems:'center'}}>
             <View style={{marginTop:10,marginLeft:20,}}>
                    <Text style={{fontSize:16,color:'black'}}>ម៉ាត និងហាង តូចៗ</Text>
                    <Text style={{fontSize:14,color:'gray',}}>អថិជន៖៣៤ នាក់</Text>
                </View>
                <TouchableOpacity  style={{marginTop:20,marginLeft:120,}}>
                   <Icon1 name="heart" size={30} color="red"/>
               </TouchableOpacity>
                
              </View>
              
           <View/>  
           <View style={{height:100, width:350,borderRadius:10,backgroundColor:'#f1f1f1',marginLeft:-50,marginTop:20,}}>
            <ScrollView  true when horizontal={true} >
            <View style={{flexDirection:"row", marginTop:10,}}>
            <TouchableOpacity>
              <Image
                style={{width:80, height:80, borderRadius:10, borderColor:"black",borderTopWidth:2,}}
                source={require('../Assets/Images/v2.jpg')} 
                />
            </TouchableOpacity>
           <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            </View>
          </ScrollView>
            </View> 
         
           <TouchableOpacity style={{backgroundColor:'#307c32', width:220, height:40,borderRadius:5,marginTop:30,marginLeft:12,}} onPress={()=>NavigationService.navigate(NAV_TYPES.JOIN)}>
                <Text style={{marginTop:5,marginLeft:52,fontSize:18, color:'white',}}>ចូលទៅកាន់ហាង</Text>
           </TouchableOpacity>
       
          
          </View>
          
        
       </View>
      
       <View style={styles.containerb}>
         <View>
              <Image
                style={{width:50, height:50,marginLeft:10, marginTop:10, borderWidth:1, borderColor:'#cccccc',  borderRadius:50,}}
                source={require('../Assets/Images/Mat.jpg')} 
                />
            </View>
          <View style={styles.containerB}>
            <View style={styles.text}>
                <View style={{marginTop:5,}}>
                    <Text style={styles.txtB}>ម៉ាត និងហាង តូចៗ</Text>
                    <Text style={styles.txtC}>អថិជន៖៣៤ នាក់</Text>
                </View>
                <TouchableOpacity style={{marginTop:5,marginLeft:120,}}>
                   <Icon1 name="heart" size={30} color="red"/>
               </TouchableOpacity>
               
              </View>
           <View/>  
           <TouchableOpacity  style={{marginTop:20,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity >
           <TouchableOpacity style={{backgroundColor:'#307c32', width:220, height:40,borderRadius:5,marginTop:30,marginLeft:12,}} onPress={()=>NavigationService.navigate(NAV_TYPES.JOIN)}>
                <Text style={{marginTop:5,marginLeft:52,fontSize:18, color:'white',}}>ចូលទៅកាន់ហាង</Text>
           </TouchableOpacity>
        
          </View>
        
       </View>
       <View style={styles.containerb}>
       <View>
              <Image
                style={{width:50, height:50,marginLeft:10, marginTop:10, borderWidth:1, borderColor:'#cccccc',  borderRadius:50,}}
                source={require('../Assets/Images/logo.png')} 
                />
            </View>
            
          <View >
             <View style={{flexDirection:'row' , alignItems:'center'}}>
             <View style={{marginTop:10,marginLeft:20,}}>
                    <Text style={{fontSize:16,color:'black'}}>ម៉ាត និងហាង តូចៗ</Text>
                    <Text style={{fontSize:14,color:'gray',}}>អថិជន៖៣៤ នាក់</Text>
                </View>
                <TouchableOpacity  style={{marginTop:20,marginLeft:120,}}>
                   <Icon1 name="heart" size={30} color="red"/>
               </TouchableOpacity>
                
              </View>
              
           <View/>  
           <View style={{height:100, width:350,borderRadius:10,backgroundColor:'#f1f1f1',marginLeft:-50,marginTop:20,}}>
            <ScrollView  true when horizontal={true} >
            <View style={{flexDirection:"row", marginTop:10,}}>
            <TouchableOpacity>
              <Image
                style={{width:80, height:80, borderRadius:10, borderColor:"black",borderTopWidth:2,}}
                source={require('../Assets/Images/v2.jpg')} 
                />
            </TouchableOpacity>
           <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/pc.jpg')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:5,}}>
              <Image
                style={{width:80, height:80, borderRadius:10,}}
                source={require('../Assets/Images/v1.jpg')} 
                />
            </TouchableOpacity>
            </View>
          </ScrollView>
            </View> 
         
           <TouchableOpacity style={{backgroundColor:'#307c32', width:220, height:40,borderRadius:5,marginTop:30,marginLeft:12,}} onPress={()=>NavigationService.navigate(NAV_TYPES.JOIN)}>
                <Text style={{marginTop:5,marginLeft:52,fontSize:18, color:'white',}}>ចូលទៅកាន់ហាង</Text>
           </TouchableOpacity>
       
          
          </View>
          
        
       </View>
       
       </ScrollView>

     

      

      </>   
    );
  }
}

const styles = StyleSheet.create({
 


  heart:{
    marginLeft:160,
  },
  containerA:{
    width:'95%',
     height:170,
     backgroundColor:'#f1f1f1',
     shadowColor: "#000",
     shadowOffset: {
    width: 0,
	  height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    
    marginTop:25,
     borderRadius:6,
    borderWidth:1,
    borderColor:'#cccccc',
   
    marginLeft:10,
    flexDirection:'row',
  },
  containerb:{
    width:'95%',
     height:290,
     backgroundColor:'#f1f1f1',
     shadowColor: "#000",
     shadowOffset: {
    width: 0,
	  height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    
    marginTop:25,
     borderRadius:6,
    borderWidth:1,
    borderColor:'#cccccc',
   
    marginLeft:10,
    flexDirection:'row',
  },
  text:{
    marginLeft:10,
    marginTop:10,
    flexDirection:'row',
    
  },
  txtB:{
    fontSize:18,
    
    color:'black',
  },
  txtC:{
    fontSize:16,
    color:'gray',
  },
  
  
});

export default Shops;