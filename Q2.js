import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Q3 from './Q3';

export default class Q2 extends Component{
    render(){
        return(
            <View>
                 <Text style={{alignSelf:'center'}}>Q2.Is School for noobs?</Text>
                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q3)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q3)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>No</Text>
                </TouchableOpacity>
            </View>
        )
    }
}