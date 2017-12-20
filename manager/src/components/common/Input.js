import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) =>{
    const {inputStyle,lableStyle,containerStyle}= styles;

return (
    <View style={containerStyle}>
        <Text style={lableStyle}>{label}</Text>
        <TextInput 
        secureTextEntry={secureTextEntry}
        underlineColorAndroid='transparent'
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder ={placeholder}
        style={{height:50,width:220}}
        />
    </View>
);
};

const styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:17,
        lineHeight:23,
        flex:2
    },
    lableStyle:{
        fontSize:17,
        paddingLeft:20,
        flex: 1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
};
export {Input};