import {StackNavigator} from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserProfile from '../Components/UserProfile'
import CompanyProfile from '../Components/CompanyProfile'

const primaryScreens = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  User: {
    screen: UserProfile
  },
  Company: {
    screen: CompanyProfile
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default primaryScreens
