import { TOTAL_MONTH } from "./types";
import { converter } from "../utils/converter";

import { gwUrl } from "../config/appConf";

export const getTotalMonth = totalMonParam => dispatch => {
  const url = gwUrl + converter(totalMonParam);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: TOTAL_MONTH,
        payload: res.data
      });
    });
};
