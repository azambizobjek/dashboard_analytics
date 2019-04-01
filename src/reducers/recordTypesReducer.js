import { RECORD_TYPES } from '../actions/types'

const initialState = {
  recordTypes:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case RECORD_TYPES:
    return {
        ...state,
        recordTypes:action.payload
    }

  default:
    return state
  }
}
