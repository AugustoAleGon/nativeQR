import {StackNavigator} from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'

const primaryScreens = StackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default primaryScreens
