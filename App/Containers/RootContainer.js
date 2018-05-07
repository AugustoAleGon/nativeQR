import React, {Component} from 'react'
import {
  View, Text
} from 'react-native'

class RootContainer extends Component {
  render () {
    return (
      <View style={{
        flex: 1
      }}>
        <Text>
                    Hello World Container
        </Text>
      </View>
    )
  }
}

export default RootContainer
