import { TOTAL_YEAR } from "./types";
import { converter } from "../utils/converter";

import { gwUrl } from "../config/appConf";

export const getTotalYear = totalYearParam => dispatch => {
  const url = gwUrl + converter(totalYearParam);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      dispatch({
        type: TOTAL_YEAR,
        payload: res.data
      });
    });
};
