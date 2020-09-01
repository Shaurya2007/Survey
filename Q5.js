import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thanks from './Thanks';

export default class Q5 extends Component{
    render(){
        return(
            <View>
                 <Text style={{alignSelf:'center'}}>Q5.Do I Am Making AAA game? (I have told something in 'Functionality 2 class ')</Text>
                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Thanks)
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