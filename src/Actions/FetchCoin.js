import { apiBaseURL } from '../Utils/Constants';
import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../Utils/ActionTypes';

const fetchCoin = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA })
        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then((res) => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: FETCH_DATA_ERROR, payload: err.data })
            })
    }
};

export default fetchCoin;