import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Thanks from './Thanks';

export default class Q1 extends Component{
    render(){
        return(
            <View>
                <Text style={{alignSelf:'center'}}>Q1.Do you want to donate to school? (Hint:Yes) </Text>
                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q2)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Thanks)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>No</Text>
                </TouchableOpacity>
            </View>
        )
    }
}