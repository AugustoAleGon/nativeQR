import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import {ApplicationStyles} from '../Themes'

class UserProfile extends Component {
  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <Text>
                    User Profile Screen!
        </Text>
      </View>
    )
  }
}

export default UserProfile
