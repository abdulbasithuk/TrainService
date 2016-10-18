import { combineReducers } from 'redux';
import { REQUEST_SERVICES, RECEIVE_SERVICES, REQUEST_SERVICE_DETAILS, RECEIVE_SERVICE_DETAILS } from '../actions';

// Reducer for managing the departure board state
function getDepartureServices(state = {isFetching: false, items: []}, action){
  switch (action.type) {
    case REQUEST_SERVICES:
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      });
    case RECEIVE_SERVICES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.services,
        lastUpdated: action.receivedAt
      });
    default:
     return state;
  }
}

// Reducer for managing the calling pattern state
function getServiceDetail(state = {isFetching: false,service: {}}, action){
  switch (action.type) {
    case REQUEST_SERVICE_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
        service: {}
      });
    case RECEIVE_SERVICE_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        service: action.service,
        lastUpdated: action.receivedAt
      });
    default:
     return state;
  }
}

const rootReducer = combineReducers({
  getDepartureServices,
  getServiceDetail
});

export default rootReducer;
