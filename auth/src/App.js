import React, { Component } from 'react';
import { View ,Text, TouchableOpacity, ToastAndroid} from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common/';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: '' };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDpykku1RzxHaqvc_yoTlHKObZEMux0SHI",
            authDomain: "auth-6ebed.firebaseapp.com",
            databaseURL: "https://auth-6ebed.firebaseio.com",
            projectId: "auth-6ebed",
            storageBucket: "auth-6ebed.appspot.com",
            messagingSenderId: "266196519212"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }

        });
    }

    onButtonPress(){
        console.log("Pressed");
        ToastAndroid.show('Pressed!', ToastAndroid.SHORT);
        firebase.auth().signOut();
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
        return (<View>
            
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}><Text>Logout</Text></TouchableOpacity>
        </View>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }

    }
    render() {
        return (
            <View>
                <Header headerText="Authendication" />
                <View style={{ marginTop: 30 ,padding:10}}>
                    {this.renderContent()}
                </View>
            </View>
        );
    }
}

export default App;