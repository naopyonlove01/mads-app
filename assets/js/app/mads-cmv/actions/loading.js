/*=================================================================================================
// Project: CADS/MADS - An Integrated Web-based Visual Platform for Materials Informatics
//          Hokkaido University (2018)
// ________________________________________________________________________________________________
// Authors: Jun Fujima (Former Lead Developer) [2018-2021]
//          Mikael Nicander Kuwahara (Current Lead Developer) [2021-]
// ________________________________________________________________________________________________
// Description: These are the available Actions for the 'Loading' feature/module
// ------------------------------------------------------------------------------------------------
// Notes: 'Loading' let us tell the user something is currently loading
// ------------------------------------------------------------------------------------------------
// References: None
=================================================================================================*/

//-------------------------------------------------------------------------------------------------
// Export constants and methods
//-------------------------------------------------------------------------------------------------
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
export const setLoadingState = (state) => ({
  type: SET_LOADING_STATE,
  state,
});
//-------------------------------------------------------------------------------------------------
