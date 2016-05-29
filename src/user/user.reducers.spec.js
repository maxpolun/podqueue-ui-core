import {USER_LOGIN} from './user.constants'
import {login} from './user.reducers'

describe('login reducer', () => {
  it('passes through non-user events', () => {
    expect(login(undefined, {type: 'FAKE_EVENT'}))
      .toEqual({
        token: null,
        waitingForResult: false,
        errors: null
      })
  })
  describe('initial submit', () => {
    let result
    beforeEach(() => {
      result = login({token: 'xyz', errors: [1, 2, 3], waitingForResult: false}, {type: `${USER_LOGIN}_PENDING`})
    })
    it('marks the login as waiting', () => {
      expect(result.waitingForResult).toEqual(true)
    })
    it('clears any token', () => {
      expect(result.token).toBe(null)
    })
    it('clears any errors', () => {
      expect(result.errors).toBe(null)
    })
  })
  describe('successful login', () => {
    let result
    beforeEach(() => {
      result = login({token: 'xyz', errors: [1, 2, 3], waitingForResult: false}, {type: `${USER_LOGIN}_FUFILLED`, payload: 'token'})
    })
    it('stores the token', () => {
      expect(result.token).toEqual('token')
    })
    it('clears any errors', () => {
      expect(result.errors).toBe(null)
    })
    it('is marked as not waiting', () => {
      expect(result.waitingForResult).toBe(false)
    })
  })
  describe('login error', () => {
    let result
    beforeEach(() => {
      result = login({token: 'xyz', errors: [1, 2, 3], waitingForResult: false}, {type: `${USER_LOGIN}_REJECTED`, payload: {errors: {loginError: true}}})
    })
    it('sets the errors', () => {
      expect(result.errors).toEqual({loginError: true})
    })
    it('is marked as not waiting', () => {
      expect(result.waitingForResult).toBe(false)
    })
  })
})
