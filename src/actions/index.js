//import fetch from 'isomorphic-fetch'

export const REQUEST_SERVICES = 'REQUEST_SERVICES'
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES'

let apiStub = {"queryEarlierServices":"https://realtime.thetrainline.com/Departures/WAT?Date=2016-10-16&Time=11:24&ExpectedWindow=-125&DesiredNumberOfServices=50","queryLaterServices":"https://realtime.thetrainline.com/Departures/WAT?Date=2016-10-16&Time=13:31&DesiredNumberOfServices=50","realTimeDataSourceAvailable":true,"timestamp":"2016-10-16T11:25:00+01:00","services":[{"serviceIdentifier":"W91021","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:25:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:25:00+01:00","realTimePlatform":"14","realTimeFlag":"Actual"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91021/2016-10-16"},{"serviceIdentifier":"W93092","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:27:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:27:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93092/2016-10-16"},{"serviceIdentifier":"W90782","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:30:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:30:00+01:00","realTimePlatform":"19","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90782/2016-10-16"},{"serviceIdentifier":"Z03231","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T11:30:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03231/2016-10-16"},{"serviceIdentifier":"W91900","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:32:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Epsom","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:32:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91900/2016-10-16"},{"serviceIdentifier":"Q51774","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:37:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"FNB"},{"crs":"AON"}],"splits":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:37:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Q51774/2016-10-16"},{"serviceIdentifier":"W92270","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:40:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92270/2016-10-16"},{"serviceIdentifier":"W94652","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:44:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:44:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94652/2016-10-16"},{"serviceIdentifier":"W92846","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:48:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"SHP"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:48:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92846/2016-10-16"},{"serviceIdentifier":"W90896","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:50:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90896/2016-10-16"},{"serviceIdentifier":"Z03232","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T11:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03232/2016-10-16"},{"serviceIdentifier":"W93589","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:51:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"CSS"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:51:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93589/2016-10-16"},{"serviceIdentifier":"W91125","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:54:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WEY"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:54:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91125/2016-10-16"},{"serviceIdentifier":"W93098","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T11:57:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T11:57:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93098/2016-10-16"},{"serviceIdentifier":"W94077","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:00:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94077/2016-10-16"},{"serviceIdentifier":"W90253","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:02:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"DKG"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:02:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90253/2016-10-16"},{"serviceIdentifier":"Z03233","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T12:05:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03233/2016-10-16"},{"serviceIdentifier":"W93396","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:07:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"AON"},{"crs":"FNB"}],"splits":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:07:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93396/2016-10-16"},{"serviceIdentifier":"W91517","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:09:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:09:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91517/2016-10-16"},{"serviceIdentifier":"W92276","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:10:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:10:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92276/2016-10-16"},{"serviceIdentifier":"W93941","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:14:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Richmond & Kingston","circularRoute":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:14:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93941/2016-10-16"},{"serviceIdentifier":"W93285","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:18:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Kingston & Richmond","circularRoute":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:18:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93285/2016-10-16"},{"serviceIdentifier":"Z03234","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T12:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03234/2016-10-16"},{"serviceIdentifier":"W93595","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:21:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"CSS"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:21:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93595/2016-10-16"},{"serviceIdentifier":"W91025","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:25:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:25:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91025/2016-10-16"},{"serviceIdentifier":"W93104","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:27:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:27:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93104/2016-10-16"},{"serviceIdentifier":"W90792","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:30:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:30:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90792/2016-10-16"},{"serviceIdentifier":"W91916","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:32:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Epsom","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:32:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91916/2016-10-16"},{"serviceIdentifier":"Z03235","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T12:35:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03235/2016-10-16"},{"serviceIdentifier":"Q51775","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:37:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"FNB"},{"crs":"AON"}],"splits":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:37:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Q51775/2016-10-16"},{"serviceIdentifier":"W92282","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:40:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92282/2016-10-16"},{"serviceIdentifier":"W94672","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:44:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:44:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94672/2016-10-16"},{"serviceIdentifier":"W92861","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:48:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"SHP"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:48:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92861/2016-10-16"},{"serviceIdentifier":"W90898","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:50:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90898/2016-10-16"},{"serviceIdentifier":"W93601","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:51:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"CSS"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:51:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93601/2016-10-16"},{"serviceIdentifier":"W91129","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:54:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WEY"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:54:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91129/2016-10-16"},{"serviceIdentifier":"Z03236","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T12:55:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03236/2016-10-16"},{"serviceIdentifier":"W93110","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T12:57:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T12:57:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93110/2016-10-16"},{"serviceIdentifier":"W94086","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:00:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94086/2016-10-16"},{"serviceIdentifier":"W90268","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:02:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"DKG"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:02:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90268/2016-10-16"},{"serviceIdentifier":"W93406","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:07:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"AON"},{"crs":"FNB"}],"splits":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:07:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93406/2016-10-16"},{"serviceIdentifier":"W91541","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:09:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:09:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91541/2016-10-16"},{"serviceIdentifier":"W92287","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:10:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:10:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92287/2016-10-16"},{"serviceIdentifier":"W93946","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:14:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Richmond & Kingston","circularRoute":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:14:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93946/2016-10-16"},{"serviceIdentifier":"Z03237","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T13:15:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03237/2016-10-16"},{"serviceIdentifier":"W93290","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:18:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Kingston & Richmond","circularRoute":true,"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:18:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93290/2016-10-16"},{"serviceIdentifier":"W93607","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:21:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"CSS"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:21:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93607/2016-10-16"},{"serviceIdentifier":"W91029","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:25:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:25:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91029/2016-10-16"},{"serviceIdentifier":"W93116","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:27:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:27:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93116/2016-10-16"},{"serviceIdentifier":"W90800","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T13:30:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T13:30:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90800/2016-10-16"}]}

function requestServices() {
  return {
    type: REQUEST_SERVICES
  }
}

function receiveServices(servicesCollection) {
  return {
    type: RECEIVE_SERVICES,
    services: servicesCollection,
    receivedAt: Date.now()
  }
}

export function fetchServices(){
  return (dispatch) => {
    dispatch(requestServices())
    return setTimeout(() => {
      return dispatch(receiveServices(apiStub.services))
    },0)
  }
}
