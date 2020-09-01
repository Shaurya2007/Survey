import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Q4 from './Q4';

export default class Q3 extends Component{
    render(){
        return(
            <View>
                <Text style={{alignSelf:'center'}}>Q3.Do you want to be principal of school?</Text>
                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q4)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{width:50,height:30,borderWidth:4,alignSelf:'center',justifyContent:'center'}}
                onPress={()=>{
                    this.state.navigation.navigate(Q4)
                }}
                >
                <Text style={{justifyContent:"center",alignItems:'center',leftPadding:40}}>No</Text>
                </TouchableOpacity>
            </View>
        )
    }
}