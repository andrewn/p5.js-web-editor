import axios from 'axios';
import * as ActionTypes from '../../../constants';
import { startLoader, stopLoader } from './loader';

const __process = (typeof global !== 'undefined' ? global : window).process;
const ROOT_URL = __process.env.API_URL;

// eslint-disable-next-line
export function getCollections(username) {
  return (dispatch) => {
    dispatch(startLoader());
    let url;
    if (username) {
      url = `${ROOT_URL}/${username}/collections`;
    } else {
      url = `${ROOT_URL}/collections`;
    }
    axios.get(url, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_COLLECTIONS,
          collections: response.data
        });
        dispatch(stopLoader());
      })
      .catch((response) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: response.data
        });
        dispatch(stopLoader());
      });
  };
}

export function createCollection(collection) {
  return (dispatch) => {
    dispatch(startLoader());
    const url = `${ROOT_URL}/collections`;
    return axios.post(url, collection, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: ActionTypes.CREATE_COLLECTION
        });
        dispatch(stopLoader());

        return response.data;
      })
      .catch((response) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: response.data
        });
        dispatch(stopLoader());

        return response.data;
      });
  };
}

export function deleteCollection(collectionId) {
  return (dispatch) => {
    dispatch(startLoader());
    const url = `${ROOT_URL}/collections/${collectionId}`;
    return axios.delete(url, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: ActionTypes.DELETE_COLLECTION,
          collectionId
        });
        dispatch(stopLoader());

        return response.data;
      })
      .catch((response) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: response.data
        });
        dispatch(stopLoader());

        return response.data;
      });
  };
}

export function addToCollection(collectionId, projectId) {
  return (dispatch) => {
    dispatch(startLoader());
    const url = `${ROOT_URL}/collections/${collectionId}/${projectId}`;
    return axios.post(url, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: ActionTypes.ADD_TO_COLLECTION,
          payload: response.data
        });
        dispatch(stopLoader());

        return response.data;
      })
      .catch((response) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: response.data
        });
        dispatch(stopLoader());

        return response.data;
      });
  };
}

export function removeFromCollection(collectionId, projectId) {
  return (dispatch) => {
    dispatch(startLoader());
    const url = `${ROOT_URL}/collections/${collectionId}/${projectId}`;
    return axios.delete(url, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: ActionTypes.REMOVE_FROM_COLLECTION,
          payload: response.data
        });
        dispatch(stopLoader());

        return response.data;
      })
      .catch((response) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: response.data
        });
        dispatch(stopLoader());

        return response.data;
      });
  };
}
