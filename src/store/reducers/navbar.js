import { TOGGLE_NAVBAR } from '../actions'

export default function (state = false, action) {
  if (action.type === TOGGLE_NAVBAR) {
    return !state
  }
  return state
}
