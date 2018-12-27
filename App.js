import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import WebView from './components/WebView';


class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <Button
          onPress = {() => navigation.navigate('MyModal')}
          title = 'Info'
          color = 'red'
        />
      )
    }
  }
  render(){
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <Button title = 'Detail 바로가기' onPress = {()=>{
          this.props.navigation.navigate('Details')
        }}/>
        <Button title = '사이트 바로가기' onPress = {()=>{
          this.props.navigation.navigate('Sites')
        }}/>
      </View>
    )
  }
}

class DetailScreen extends Component{
  render(){
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail</Text>
      </View>
    )
  }
}


class SiteScreen extends Component{
  render(){
    return (
        <WebView/>
    )
  }
}


class ModalScreen extends Component {
  render(){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>This is a Modal</Text>
        <Button 
          onPress={()=>this.props.navigation.goBack()}
          title='Dismiss'
          />
      </View>
    )
  }
}

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: {screen: DetailScreen},
    Sites: {screen: SiteScreen}
  }
)

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    MyModal: { screen: ModalScreen}
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default createAppContainer(RootStack);

class App extends Component{
  render(){
    return(
      <AppView/>
    )
  }
}
