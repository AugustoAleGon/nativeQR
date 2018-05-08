/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { barcodeTypes } from '../Redux/Reducers/barcode'

/* ------------- Sagas ------------- */
import {
  readBarCode
} from './barcodeSaga'

/* ------------- API ------------- */
/* No connection with API, but if it is required here you can use it (: */

  // The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(barcodeTypes.READ_BAR_CODE, readBarCode)
  ]
}
