import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  readBarCode: ['data'],
  barcodeResult: ['text'],
  resetBarcode: null
})

export const barcodeTypes = Types
export default Creators

/* -------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  barcode: null,
  barcodeReset: null
})

/* ------------ Reducers -------------- */
const barcodeResult = (state, action) => ({
  ...state,
  barcode: action.text
})

const resetBarcode = () => ({
  ...INITIAL_STATE
})

/* --------- Hookup Reducers To Types --------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BARCODE_RESULT]: barcodeResult,
  [Types.RESET_BARCODE]: resetBarcode
})
