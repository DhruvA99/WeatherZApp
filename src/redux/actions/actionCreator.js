import * as actionTypes from "./actionTypes";
import axios from "axios";
import { api } from "../apiKey";

export const fetchSuccess = (data) => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchFail = (error) => ({
  type: actionTypes.FETCH_FAILED,
  payload: error,
});

export const fetchLoading = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchStart = (query) => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .get(
      `${api.baseURL}?q=${query.place.toLowerCase()}&units=metric&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchFail(err.message));
    });
};
