import * as actionType from './actionTypes'

export const loadAns = (number) => {
   return {
    type: actionType.LOAD_ANSWER,
    payload: number
}
}

export const loadButtons = (number) => {
    return {
     type: actionType.LOAD_BUTTONS,
     payload: number
 }
 }

 export const loadClear = (number) => {
    return {
     type: actionType.LOAD_CLEAR,
     payload: number
 }
 }

 export const loadBackspace = (number) => {
    return {
     type: actionType.LOAD_BACKSPACE,
     payload: number
 }
 }