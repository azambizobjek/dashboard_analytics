import { RECORD_TYPES } from "./types";
import { converter } from "../utils/converter";

import { gwUrl } from "../config/appConf";

export const getRecordTypes = recTypesParam => dispatch => {
  const url = gwUrl + converter(recTypesParam);
  // const url=`${gwUrl}/searchrecord?param=${+converter(totalRecParam)}`

  fetch(url)
    .then(res => res.json())
    .then(res => {
      //    console.log(res)
      dispatch({
        type: RECORD_TYPES,
        payload: res.data
      });
    });
};

// export const getRecordTypes = recTypesParam => dispatch => {
//   const url = gwUrl + converter(recTypesParam);
//   fetch(url)
//     .then(res => res.json())
//     .then(res => {
//       const { results } = res;
//       results.sort((a, b) => {
//         const keyA = new Date(a.date_updated);
//         const keyB = new Date(b.date_updated);
//         if (keyA < keyB) return 1;
//         if (keyA > keyB) return -1;
//         return 0;
//       });
//       dispatch({
//         type: RECORD_TYPES,
//         payload: res.data
//       });
//     });
// };
