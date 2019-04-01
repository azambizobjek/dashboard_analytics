import { TOTAL_MONTH } from '../actions/types'

const initialState = {
  totalMonth:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case TOTAL_MONTH:
    return {
        ...state,
        totalMonth:action.payload
    }

  default:
    return state
  }
}
