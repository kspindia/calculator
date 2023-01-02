import {combineReducers} from 'redux'
import {calculatorReducer,CALCULATOR_KEY} from './reducer'
export const rootReducer = combineReducers({
  [CALCULATOR_KEY] : calculatorReducer
})