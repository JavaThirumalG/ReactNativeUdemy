import React from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSelection';
import Button from './Button'

const albumDetails = ({ album }) => {
    //style={{ height: 50, borderBottomColor: 'gray', borderBottomWidth: 0.3 }}
    const { title, artist, thumbnail_image,image,url } = album;
    const { headerTextStyle, imageStyle,iconStyle, secondStyle } = style;
    return (
        <Card>
            <CardSection>
                <View >
                    <Image style={iconStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={secondStyle} >
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const style = StyleSheet.create({
    secondStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5
    },
    iconStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
    headerTextStyle: {
        fontSize: 20
    }
});

export default albumDetails;