import { put } from 'redux-saga/effects'
import barcodeActions from '../Redux/Reducers/barcode'
import { NavigationActions } from 'react-navigation'

export function * readBarCode (action) {
  const { barcodeResult } = barcodeActions
  yield put(barcodeResult({barcode: action.data.data}))
  if (action.data.data === 'Company') {
    const navigateCompany = NavigationActions.navigate({routeName: 'Company'})
    yield put(navigateCompany)
  } else if (action.data.data === 'User') {
    const navigateUser = NavigationActions.navigate({routeName: 'User'})
    yield put(navigateUser)
  } else {
    console.log('Houston we got a problem!')
  }
}
