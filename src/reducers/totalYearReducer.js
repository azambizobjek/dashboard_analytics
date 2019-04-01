import { TOTAL_YEAR } from '../actions/types'

const initialState = {
  totalYear:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case TOTAL_YEAR:
    return {
        ...state,
        totalYear:action.payload
    }

  default:
    return state
  }
}
