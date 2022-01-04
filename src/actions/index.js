import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// export const fetchPosts = () => {
// send redux-thunk a function with dispatch, and getState
// return async (dispatch, getState) => {
export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceHolder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response});
};
// };