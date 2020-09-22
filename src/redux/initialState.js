// import {storage} from '@core/utils'
import {defaultStyles, defaultTitle} from '../constants'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {}, // {'1': {}}
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

// export const initialState = storage('excel-state')
// ? normalize(storage('excel-state'))
// : defaultState

export function normalizeInitialState(state) {
  return state ? normalize(state) : defaultState
}
