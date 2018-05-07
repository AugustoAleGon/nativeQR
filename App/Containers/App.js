import React, { Component } from 'react'
import {
  Platform,
  View
} from 'react-native'
import DebugConfig from '../Config/DebugConfig'

// Local Libraries
import RootContainer from './RootContainer'

// Create our store

type Props = {}
class App extends Component<Props> {
  render () {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
      }}>
        <RootContainer />
      </View>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
