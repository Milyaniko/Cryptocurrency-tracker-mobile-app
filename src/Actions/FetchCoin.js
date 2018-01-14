import { apiBaseURL } from '../Utils/Constants';
import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../Utils/ActionTypes';

// let FetchData = () => {
//     return dispatch  => {

//         dispatch({ type: FETCH_DATA })
        
//         fetch(`${apiBaseURL}/v1/ticker/?limit=10`)
//             .then((response) => response.json())
//             .then((dataCoin) => {
//                 dispatch({ type: FETCH_DATA_SUCCESS, payload: dataCoin.data })
//                 console.log(dataCoin.data);
//             })
//             .catch((error) => {
//                 dispatch({ type: FETCH_DATA_ERROR, payload: error.data })
//             });
//     }
// };

   const fetchCoin = () => {
       return dispatch => {
         dispatch({ type: FETCH_DATA })

         return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
         .then((res) => {
             dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data}) 
            
         })
         .catch((err) => {
             dispatch({ type: FETCH_DATA_ERROR, payload: err.data})
         })

       }
   }
export default fetchCoin;