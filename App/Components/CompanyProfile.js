import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import {ApplicationStyles} from '../Themes'

class CompanyProfile extends Component {
  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <Text>
                    Company Profile Screen!
        </Text>
      </View>
    )
  }
}

export default CompanyProfile
