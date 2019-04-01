import { RECORD_MONTH } from "./types";
import { converter } from "../utils/converter";
import { gwUrl } from "../config/appConf";

export const getRecMonth = recMonthParam => dispatch => {
  const url = gwUrl + converter(recMonthParam);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: RECORD_MONTH,
        payload: res.totalRecordCreated
      });
    });
};
