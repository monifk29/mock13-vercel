import * as types from "./actionTypes";

import axios from "axios";

const getCompanyReq = () => {
  return {
    type: types.GET_COMPANY_REQ
  };
};

const getCompanySuccess = (payload) => {
  return {
    type: types.GET_COMPANY_SUCCESS,
    payload,
  };
};

const getCompanyFail = () => {
  return {
    type: types.GET_COMPANY_FAIL,
  };
};

//post

const postCompanyReq = () => {
  return {
    type: types.POST_COMPANY_REQ
  };
};

const postCompanySuccess = (payload) => {
  return {
    type: types.POST_COMPANY_SUCCESS,
    payload,
  };
};

const postCompanyFail = () => {
  return {
    type: types.POST_COMPANY_FAIL
  };
};

//filter

const getFilterReq = () => {
  return {
    type: types.GET_FILTER_REQ
  };
};

const getFilterSuccess = (payload) => {
  return {
    type: types.GET_COMPANY_SUCCESS,
    payload,
  };
};

const getFilterFail = () => {
  return {
    type: types.GET_COMPANY_FAIL
  };
};


const getData = (payload) => {
    return(dispatch) => {
        dispatch(getCompanyReq());
        axios.get("https://ancient-caverns-16282.herokuapp.com/company",payload).then((res) => dispatch(getCompanySuccess(res.data))).catch((e) => dispatch(getCompanyFail()))

    }
}


export const postData = (payload) => {
  return(dispatch) => {
      dispatch(postCompanyReq());
      axios.post(`https://ancient-caverns-16282.herokuapp.com/company`,payload).then((res) => dispatch(postCompanySuccess(res.data))).catch((e) => dispatch(postCompanyFail()))              

  }
}

export const getFilterData = (searchBy,company) => {
  return(dispatch) => {
      dispatch(getFilterReq());
      axios.get(`https://ancient-caverns-16282.herokuapp.com/company?${searchBy}=${company}`).then((res) => dispatch(getFilterSuccess(res.data))).catch((e) => dispatch(getFilterFail()))              

  }
}


  export {getData}