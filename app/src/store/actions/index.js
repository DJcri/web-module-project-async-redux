import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = (countryCode) => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: res.Countries.find((country) => {
            return country.CountryCode === countryCode;
          }),
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAIL });
      });
  };
};
