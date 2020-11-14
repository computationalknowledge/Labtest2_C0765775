import React, { Component } from 'react';
import { View, Text, Image,TextInput, TouchableOpacity,ScrollView, Alert } from 'react-native';

export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Home:false,
        Login:true,
        Music:false,
        user:'',
        pass:''
    };
  }
  setLogin() {
    if (this.state.user == 'jeena') {
        if(this.state.pass == '1234'){
            this.setState({Home: true, Login:false, user:'', pass:''})
        }else{
            Alert.alert('Password Incorrect')
        }
    }else{
        Alert.alert('User Name Incorrect')
    }
  }

  render() {
    return (
      <View>
        {this.state.Login&&<View style={{justifyContent:"center",backgroundColor:'#F9CBC2',height:'100%'}}>
        <View>
        <TextInput
                style={{
                  color: 'black',
                  height:50,
                  width:'80%',
                  alignSelf:"center",
                  backgroundColor:'white',
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 10,
                  marginBottom:20,
                  borderColor: '#dadae8',}}
                placeholder="Enter User Name" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                value={this.state.user}
                onChangeText={(x)=>this.setState({user:x})}
                returnKeyType="next"
                underlineColorAndroid="#f000"
                secureTextEntry={false}
                blurOnSubmit={false}
              />
            </View>
            <View >
              <TextInput
                style={{
                  color: 'black',
                  width:'80%',
                  alignSelf:"center",
                  backgroundColor:'white',
                  height:50,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 10,
                  borderColor: '#dadae8',}}
                onChangeText={(UserPassword) => this.setState({pass:UserPassword})}
                placeholder="Enter Password" //12345
                value={this.state.pass}
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
              
        </View>
        <View>
        <TouchableOpacity
        onPress={()=>this.setLogin()}
              style={{ backgroundColor: '#2652F3',
              borderWidth: 0,
              color: '#FFFFFF',
              borderColor: '#7DE24E',
              height: 50,
              alignItems: 'center',
              borderRadius: 10,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 20,
              marginBottom: 25,}}
              activeOpacity={0.5}
              >
              <Text style={{
                color: '#FFFFFF',
                paddingVertical: 15,
                fontSize: 16,}}>
                LOGIN
              </Text>
            </TouchableOpacity>
            </View>
            </View>}
            {this.state.Home&&<View style={{height:'100%',backgroundColor:'white',padding: 20,}}>
                <Text style={{fontSize:26,fontWeight:'700',paddingTop:30}}>Browse</Text>
                <TouchableOpacity onPress={()=>this.setState({Music:false,Home:false,Login:true})} style={{position:"absolute",right:20,top:55}}><Text style={{color:'red'}}>Log Out</Text></TouchableOpacity>
                <Text style={{color:'gray',fontSize:14,paddingTop:20}}>CELEBRATING</Text>
                <Text style={{color:'black',fontSize:16,paddingTop:5}}>Hear music chosen by stars from India and beyond</Text>
                <TouchableOpacity onPress={()=>this.setState({Home:false,Login:false,Music:true,})}>
                <Image source={require('./Bitmap.png')} style={{width:'100%',height:180,borderRadius:10,marginTop:20}}/>
                </TouchableOpacity>
                <Text style={{color:'gray',fontSize:14,paddingTop:20}}>Listen Now</Text>
                <Text style={{color:'black',fontSize:16,paddingTop:5}}>New Music Daily</Text>
                <TouchableOpacity onPress={()=>this.setState({Home:false,Login:false,Music:true,})}>
                <Image source={require('./Bitmap1.png')} style={{width:'100%',height:180,borderRadius:10,marginTop:20}}/>
                </TouchableOpacity>
            </View>}
            {this.state.Music&&<View style={{height:'100%',backgroundColor:'white',}}>
            <Text style={{fontSize:16,fontWeight:'500',paddingTop:10,alignSelf:"center"}}>Music</Text>
            <TouchableOpacity onPress={()=>this.setState({Home:true,Login:false,Music:false,})} style={{flexDirection:"row",marginLeft:20,marginTop:-18}}>
            <Image source={require('./leftarrow.png')} style={{width:18,height:18,borderRadius:10,marginTop:0}}/><Text>  Browse</Text>
            </TouchableOpacity>
            <ScrollView style={{marginLeft:20,marginRight:20,marginTop:20}} showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./BitmapCopy2.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Shreya Ghoshal Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./BitmapCopy3.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Aditi Ramesh Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./Bitmap3.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Katy Perr's Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./Bitmap.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Shreya Ghoshal Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./BitmapCopy2.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Justin Baiber Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./BitmapCopy3.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Mad Maddy Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./Bitmap3.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Shreya Ghoshal Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('./Bitmap.png')} style={{width:80,height:80,borderRadius:10,marginTop:20}}/>
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:20}}>
                        <Text style={{paddingTop:15,fontSize:16,fontWeight:'600'}}>Shreya Ghoshal Play List</Text>
                        <Text style={{color:'gray',paddingTop:8}}>Apple Music</Text>
                    </View>
                </View>
            </ScrollView>
            </View>

            }
      </View>
    );
  }
}
