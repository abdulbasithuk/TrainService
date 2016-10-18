import fetch from 'isomorphic-fetch'

export const REQUEST_SERVICES = 'REQUEST_SERVICES'
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES'
export const REQUEST_SERVICE_DETAILS = 'REQUEST_SERVICE_DETAILS'
export const RECEIVE_SERVICE_DETAILS = 'RECEIVE_SERVICE_DETAILS'

// Action creator to initiate the request
function requestServices() {
  return {
    type: REQUEST_SERVICES
  }
}

// Action creator to notify departure board with fetched services
function receiveServices(servicesCollection) {
  return {
    type: RECEIVE_SERVICES,
    services: servicesCollection,
    receivedAt: Date.now()
  }
}

// Action creator to notify UI with fetched calling pattern
function receiveServiceDetails(serviceDetail) {
  return {
    type: RECEIVE_SERVICE_DETAILS,
    service: serviceDetail,
    receivedAt: Date.now()
  }
}

// Function to fetch all the departure services for London Waterloo station
export function fetchServices(){
  return (dispatch) => {
    dispatch(requestServices())
    return fetch(`https://realtime.thetrainline.com/departures/wat`)
      .then(response => response.json())
      .then(data => dispatch(receiveServices(data.services)))
      .catch(e => console.log('Error in fetching departure services', e))
  }
}

// Function to fetch the calling pattern by using the provided URL
export function fetchServiceDetails(callingPatternUrl){
  return (dispatch) => {
    return fetch(callingPatternUrl)
      .then (response => response.json())
      .then(data => dispatch(receiveServiceDetails(data.service)))
      .catch(e => console.log('Error in fetching calling pattern', e))
  }
}
