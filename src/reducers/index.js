import { combineReducers } from 'redux';
import { REQUEST_SERVICES, RECEIVE_SERVICES } from '../actions';

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

const rootReducer = combineReducers({
  getDepartureServices
});

export default rootReducer;
