import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC6aVkyQVa5HIMAplL4-9InG4lW1wKjPZc',
            authDomain: 'manager-25c65.firebaseapp.com',
            databaseURL: 'https://manager-25c65.firebaseio.co',
            projectId: 'manager-25c65',
            storageBucket: 'manager-25c65.appspot.com',
            messagingSenderId: '351255359085'
        };

        firebase.initializeApp(config);
    };
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }

}

export default App;