import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress , children}) => {
    const { buttonStyle, textStyle } = styles;
    return (<TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        color: "#007aff",
        fontSize: 16,
        fontWeight: '600'

    }
});
export default Button;