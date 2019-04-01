import { TOTAL_CREATED } from "./types";
import { converter } from "../utils/converter";
import { gwUrl } from "../config/appConf";

export const getTotalCreated = totalCreaParam => dispatch => {
  const url = gwUrl + converter(totalCreaParam);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: TOTAL_CREATED,
        payload: res.totalRecordCreated
      });
    });
};
