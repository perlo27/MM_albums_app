import {endpoint} from './config';
import {callApi} from './api';

export const getData = ({path, mapper, action}) => async dispatch => {
  dispatch(action.request());
  try {
    const resp = await callApi(endpoint, path, mapper);
    dispatch(action.success(resp));
  } catch (err) {
    dispatch(action.failure(err));
  }
};

