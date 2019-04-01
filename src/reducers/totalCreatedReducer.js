import { TOTAL_CREATED } from '../actions/types'

const initialState = {
  totalCreated:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case TOTAL_CREATED:
    return {
        ...state,
        totalCreated:action.payload
    }

  default:
    return state
  }
}
