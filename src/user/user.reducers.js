import {USER_LOGIN} from './user.constants'

let defaultLoginState = {
  token: null,
  waitingForResult: false,
  errors: null
}

export function login (state = defaultLoginState, action) {
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`:
      return {token: null, waitingForResult: true, errors: null}
    case `${USER_LOGIN}_FUFILLED`:
      return {token: action.payload, waitingForResult: false, errors: null}
    case `${USER_LOGIN}_REJECTED`:
      return {token: null, waitingForResult: false, errors: action.payload.errors}
  }
  return state
}
