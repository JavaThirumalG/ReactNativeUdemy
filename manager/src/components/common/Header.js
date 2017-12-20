import React from 'react';
import ReactNative, { Text, View } from 'react-native';

const Header = (props) => {
    return (<View 
        style={{backgroundColor: '#007aff',justifyContent:'center',
                alignItems:'center', height:65,
                shadowColor:'#007aff',
                shadowOffset:{width:0,height:6},shadowOpacity:6,shadowRadius:2,borderBottomWidth:6}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 10,color:'white',fontWeight:'bold'  }}>{props.headerText}</Text>
            </View>);
};

export  {Header};