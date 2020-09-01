import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Q4 extends Component{
    render(){
        return(
            <View>
                 <Text style={{alignSelf:'center'}}>Q4.Hello!</Text>
                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q5)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>Hi! :)</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q5)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}> Go to Hell!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}