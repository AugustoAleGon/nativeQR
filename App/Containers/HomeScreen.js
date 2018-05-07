import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import {ApplicationStyles} from '../Themes'

class HomeScreen extends Component {
  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <Text>
                    This is my Home Screen! (:
        </Text>
      </View>
    )
  }
}

export default HomeScreen
