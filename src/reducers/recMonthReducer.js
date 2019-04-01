import { RECORD_MONTH } from "../actions/types";

const initialState = {
  recordMonth: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_MONTH:
      return {
        ...state,
        recordMonth: action.payload
      };

    default:
      return state;
  }
};
