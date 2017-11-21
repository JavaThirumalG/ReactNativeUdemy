import React from 'react';
import ReactNative, { Text, View } from 'react-native';

const Header = (props) => {
    return (<View style={{backgroundColor: '#007aff',justifyContent:'center',alignItems:'center', height:65,borderBottomColor:'#EEEEEE',borderBottomWidth:6}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 10,color:'white',fontWeight:'bold'  }}>{props.headerText}</Text>
            </View>);
};

export  {Header};