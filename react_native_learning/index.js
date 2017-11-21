import { AppRegistry } from 'react-native';
import App from './App';
import Home from './component/home';
import {
  StackNavigator,
} from 'react-navigation';

//StackNavigator 

const AppNavigate = StackNavigator({
  Login: {
    screen: App,
    navigationOptions: {
      title: 'Header',
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  }
});



AppRegistry.registerComponent('learning', () => Home);
