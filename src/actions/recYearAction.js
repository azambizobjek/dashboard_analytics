import { RECORD_YEAR } from "./types";
import { converter } from "../utils/converter";
import { gwUrl } from "../config/appConf";

export const getRecYear = recYearParam => dispatch => {
  const url = gwUrl + converter(recYearParam);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: RECORD_YEAR,
        payload: res.totalRecordCreated
      });
    });
};
