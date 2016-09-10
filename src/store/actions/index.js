export const ADD_COUNT = 'ADD_COUNT'
export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'

export function addCount(amount) {
  return {
    type: ADD_COUNT,
    payload: amount
  }
}

export function toggleNavbar() {
  return {
    type: TOGGLE_NAVBAR
  }
}
