import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    componentDidMount(){
      console.log('this.props***', this.props);
      var dataArray = ["Smey", "30", "Male"]
      var dataObje = {
        name: "Smey",
        age: "30",
        gender: "Male"
      }
      console.log(dataArray[1]);
      console.log(dataObje.age);
    }
    render(){
        return(
            <SafeAreaView style={{flex: 1,}}>
                <View style={[styles.container, {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: "column"
                }]}>
                    <View style={styles.blockTop} >
                    <Image
                        style={styles.logo}
                        source={require('./../Assets/Images/logo-mst.png')}
                    />
                    </View>
                    <View style={styles.blockMidle} >
                    <TextInput
                        style={styles.input}
                        placeholder="លេខទូរសព្ទ"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="លេខសំងាត់"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={() => this.props.getTest('wsdfghjk')}
                    >
                        <Text
                        style={styles.buttonText}
                        >
                        ចូលគណនី
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.blockBottom} />
                </View>
                </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockTop: { 
    flex: 1, 
    // backgroundColor: "red" 
    justifyContent:'center',
    alignItems:'center'
  },
  blockMidle: { 
    flex: 2, 
    // backgroundColor: "darkorange" 
  },
  blockBottom: { 
    flex: 3, 
    // backgroundColor: "green" 
  },
  logo: {
    width: '50%',
    height: 50,
    marginTop:60
    // resizeMode: 'contain'
  },
  input: {
    height: 50,
    // backgroundColor:'red',
    width: '70%',
    marginLeft:'15%',
    borderWidth:2,
    borderColor:'#0e6d65',
    borderRadius:30,
    paddingHorizontal:20,
    marginTop:15,
  },
  button: {
    height: 50,
    backgroundColor:'#0000fe',
    width: '40%',
    marginLeft:'30%',
    justifyContent:'center',
    borderRadius:30,
    marginTop:15
  },
  buttonText: {
    textAlign:'center',
    color:'#fff'
  },
});