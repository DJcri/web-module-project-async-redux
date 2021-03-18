import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions";

const initialState = {
  isLoading: false,
  countryCodeToUse: "US",
  NewConfirmed: 32129,
  TotalConfirmed: 275582,
  NewDeaths: 1161,
  TotalDeaths: 7087,
  Date: "2020-04-05T06:37:00Z",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_DATA_START:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    case FETCH_DATA_FAIL:
      return { ...state, isLoading: false };
  }
};
