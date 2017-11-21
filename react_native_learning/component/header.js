import React from 'react';
import ReactNative, { Text, View } from 'react-native';

const Header = (props) => {
    return (<View style={{backgroundColor: '#E0E0E0',justifyContent:'center',alignItems:'center', height:65,borderBottomColor:'#EEEEEE',borderBottomWidth:6}}>
        <Text style={{ fontSize: 20, alignSelf: 'center', padding: 10,color:'black',fontWeight:'bold'  }}>{props.headerText}</Text>
            </View>);
};

export default Header;