import { TOGGLE_NAVBAR } from '../actions'

export default function (state = false, action) {
  if (action.type === TOGGLE_NAVBAR) {
    if (!action.payload) {
      document.getElementById('wrapper').className = 'toggled'
    } else {
      document.getElementById('wrapper').className = ''
    }
    return !action.payload
  }
  return state
}
