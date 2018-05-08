import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// Actions
import barcodeActions from '../Redux/Reducers/barcode'

// Styles
import {ApplicationStyles} from '../Themes'
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this._onSuccessReadingCode = this._onSuccessReadingCode.bind(this)
  }

  componentDidMount () {
    this.props.resetCode()
  }

  _onSuccessReadingCode (e) {
    this.props.readbarcode(e)
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

const mapStateToProps = (state, props) => {
  return {
    barcode: state.barcode.barcode
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    readbarcode: bindActionCreators(barcodeActions.readBarCode, dispatch),
    resetCode: bindActionCreators(barcodeActions.resetBarcode, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
