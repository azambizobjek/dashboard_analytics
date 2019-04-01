import { RECORD_YEAR } from "../actions/types";

const initialState = {
  recordYear: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_YEAR:
      return {
        ...state,
        recordYear: action.payload
      };

    default:
      return state;
  }
};
