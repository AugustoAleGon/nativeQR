import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

// Styles
import {ApplicationStyles} from '../Themes'
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this._onSuccessReadingCode = this._onSuccessReadingCode.bind(this)
  }

  _onSuccessReadingCode (e) {
    console.log('This is the event: ', e)
  }

  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <View style={styles.headerHomeScreen}>
          <Text>Scan bar code</Text>
        </View>
        <QRCodeScanner
          onRead={(e) => { this._onSuccessReadingCode(e) }}
        />
      </View>
    )
  }
}

export default HomeScreen
