import * as types from "./actionTypes";

const initialState = {
  company: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_COMPANY_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_COMPANY_SUCCESS: {
      return {
        ...state,
        company: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_COMPANY_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //filter
    case types.GET_FILTER_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_COMPANY_SUCCESS: {
      return {
        ...state,
        company: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_COMPANY_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
