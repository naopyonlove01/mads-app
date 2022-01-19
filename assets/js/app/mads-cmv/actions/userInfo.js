/*=================================================================================================
// Project: CADS/MADS - An Integrated Web-based Visual Platform for Materials Informatics
//          Hokkaido University (2018)
// ________________________________________________________________________________________________
// Authors: Jun Fujima (Former Lead Developer) [2018-2021]
//          Mikael Nicander Kuwahara (Current Lead Developer) [2021-]
// ________________________________________________________________________________________________
// Description: These are the available Actions for the 'User Info' feature/module
// ------------------------------------------------------------------------------------------------
// Notes: 'User Info' let us get information on the current user
// ------------------------------------------------------------------------------------------------
// References: api
=================================================================================================*/

//-------------------------------------------------------------------------------------------------
// Load required libraries
//-------------------------------------------------------------------------------------------------
import api from '../api';

//-------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
// Export constants and methods
//-------------------------------------------------------------------------------------------------
export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE';

//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const requestUserInfo = () => ({
  type: USER_INFO_REQUEST,
});
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const receiveUserInfo = (json) => ({
  type: USER_INFO_SUCCESS,
  data: json,
  receivedAt: Date.now(),
});
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const getUserInfoFailure = (error) => ({
  type: USER_INFO_FAILURE,
  error,
});
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const fetchUserInfo = () => (dispatch) => {
  dispatch(requestUserInfo());
  return api.userInfo
    .fetchUserInfo()
    .then((res) => dispatch(receiveUserInfo(res.data)))
    .catch((err) => dispatch(getUserInfoFailure(err)));
};
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
export const fetchUserInfoIfNeeded = () => (dispatch, getState) => {
  return dispatch(fetchUserInfo());
};
//-------------------------------------------------------------------------------------------------
