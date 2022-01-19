 
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


class  Addaddress extends Component {
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
                 <Text style={{fontSize:18, color:'#e3ffe7', marginLeft:20,}}>ត្រលប់</Text>
           </TouchableOpacity>
           <View style={{alignItems:'center',marginLeft:100,}}>
                 <Text style={{fontSize:20, color:'#e3ffe7'}}>អាស័យដ្ធាន</Text>
           </View>
           </View>
        </View>
        <TouchableOpacity style={{marginLeft:"45%",}}>
                        <Icon4  
                            style={{marginLeft:5,marginTop:5,}}
                        name="keyboard-arrow-down" size={40} color="black"
                        />
      </TouchableOpacity>
        <View style={{
            fontSize:20, color:"black",marginLeft:135,}}>
              <Text  style={{fontSize:20,marginLeft:30,color:'black'}}>រាជធានី/ខេត្ត</Text>
            </View>
        <View style={{flexDirection:'row'}}>
           
            <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:75, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
                <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ភ្នំពេញ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:120,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
            <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>បន្ទាយមានជ័យ</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>បាត់ដំបង</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
           
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:80, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
               <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កំពងចាម</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កំពង់ឆ្នាំង</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:78,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កំពង់ស្ពឺ</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កំពង់ធំ</Text>
       </TouchableOpacity>
    
       </View>
       <View style={{flexDirection:'row'}}>
           
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:60, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
               <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កំពត</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កណ្តាល</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:78,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កោះកុង</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:60,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ក្រចេះ</Text>
       </TouchableOpacity>
    
       </View>
       <View style={{flexDirection:'row'}}>
           
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:90, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
               <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>មណ្ឌលគិរី</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ព្រះវីហារ</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:65,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ព្រៃវែង</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:90,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ពោធិ៏សាត់</Text>
       </TouchableOpacity>
    
       </View>
       <View style={{flexDirection:'row'}}>
           
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:80, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
               <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>រតនះគិរី</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>សៀមរាប</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:85,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ព្រះសីហនុ</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ស្ទឹងត្រែង</Text>
       </TouchableOpacity>
    
       </View>
       <View style={{flexDirection:'row'}}>
           
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30,alignItems:'center', width:90, height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
               <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ស្វាយរៀង</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:68,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
           <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>តាកែវ</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:110,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ឧត្តរមានជ័យ</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:60,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>កែប</Text>
       </TouchableOpacity>
    
       </View>
       <View style={{flexDirection:'row'}}>
      
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:80,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ប៉ៃលិន</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#ffff',marginLeft:10,marginTop:30, width:70,alignItems:'center', height:50, borderRadius:5,borderWidth:1,borderColor:'#d5d5d5'}}>   
          <Text  style={{fontSize:18,marginLeft:5,marginTop:10,}}>ត្បូងឃ្មុំ</Text>
       </TouchableOpacity>
    
       </View>
      
      
      
      </>   
    );
  }
}

const styles = StyleSheet.create({
   
 
});

export default Addaddress;