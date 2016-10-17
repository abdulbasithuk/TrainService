//import fetch from 'isomorphic-fetch'

export const REQUEST_SERVICES = 'REQUEST_SERVICES'
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES'
export const REQUEST_SERVICE_DETAILS = 'REQUEST_SERVICE_DETAILS'
export const RECEIVE_SERVICE_DETAILS = 'RECEIVE_SERVICE_DETAILS'

let apiStub = {"queryEarlierServices":"https://realtime.thetrainline.com/Departures/WAT?Date=2016-10-16&Time=23:09&ExpectedWindow=-360&DesiredNumberOfServices=50","queryLaterServices":"https://realtime.thetrainline.com/Departures/WAT?Date=2016-10-17&Time=06:21&DesiredNumberOfServices=50","realTimeDataSourceAvailable":true,"timestamp":"2016-10-16T23:10:00+01:00","services":[{"serviceIdentifier":"W91774","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:09:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTimePlatform":"18","realTimeFlag":"Delayed"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91774/2016-10-16"},{"serviceIdentifier":"W96737","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:10:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:10:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W96737/2016-10-16"},{"serviceIdentifier":"W93995","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:14:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"KNG"}],"via":"via Richmond","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:14:00+01:00","realTimePlatform":"17","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93995/2016-10-16"},{"serviceIdentifier":"W93339","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:18:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"STW"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:18:00+01:00","realTimePlatform":"3","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93339/2016-10-16"},{"serviceIdentifier":"Z03273","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T23:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03273/2016-10-16"},{"serviceIdentifier":"Q62974","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:25:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:25:00+01:00","realTimePlatform":"14","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Q62974/2016-10-16"},{"serviceIdentifier":"W92073","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:32:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"EPS"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:32:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92073/2016-10-16"},{"serviceIdentifier":"W90883","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:35:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:35:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90883/2016-10-16"},{"serviceIdentifier":"W91277","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"FNH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:40:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91277/2016-10-16"},{"serviceIdentifier":"W94874","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-16T23:44:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HOU"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-16T23:44:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94874/2016-10-16"},{"serviceIdentifier":"Z03274","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-16T23:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03274/2016-10-16"},{"serviceIdentifier":"W92762","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T00:01:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Cobham","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-17T00:01:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92762/2016-10-17"},{"serviceIdentifier":"W93998","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T00:18:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"KNG"}],"via":"via Richmond","realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-17T00:18:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93998/2016-10-17"},{"serviceIdentifier":"Z03200","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T00:19:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03200/2016-10-17"},{"serviceIdentifier":"W93340","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T00:42:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"STW"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-17T00:42:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93340/2016-10-17"},{"serviceIdentifier":"W90741","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T00:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-17T00:50:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90741/2016-10-17"},{"serviceIdentifier":"Z03201","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T00:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03201/2016-10-17"},{"serviceIdentifier":"W90531","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T01:05:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WOK"}],"realTimeUpdatesInfo":{"realTimeServiceInfo":{"realTime":"2016-10-17T01:05:00+01:00","realTimeFlag":"Estimate"}},"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W90531/2016-10-17"},{"serviceIdentifier":"Z03202","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T01:35:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03202/2016-10-17"},{"serviceIdentifier":"Z03203","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T02:35:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03203/2016-10-17"},{"serviceIdentifier":"Z03204","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T02:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03204/2016-10-17"},{"serviceIdentifier":"Z03205","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T03:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03205/2016-10-17"},{"serviceIdentifier":"Z03206","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T03:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03206/2016-10-17"},{"serviceIdentifier":"Z03207","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T04:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03207/2016-10-17"},{"serviceIdentifier":"Z03208","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T04:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03208/2016-10-17"},{"serviceIdentifier":"Z03209","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T04:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03209/2016-10-17"},{"serviceIdentifier":"W94009","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94009/2016-10-17"},{"serviceIdentifier":"Z03210","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T05:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03210/2016-10-17"},{"serviceIdentifier":"W91372","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:05:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"RDG"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91372/2016-10-17"},{"serviceIdentifier":"W96038","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:12:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"SHP"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W96038/2016-10-17"},{"serviceIdentifier":"W94012","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94012/2016-10-17"},{"serviceIdentifier":"Z03211","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T05:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03211/2016-10-17"},{"serviceIdentifier":"W91137","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:30:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WEY"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91137/2016-10-17"},{"serviceIdentifier":"W93907","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:33:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Richmond & Kingston","circularRoute":true,"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93907/2016-10-17"},{"serviceIdentifier":"Z03212","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T05:40:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03212/2016-10-17"},{"serviceIdentifier":"W91816","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:47:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Epsom","callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91816/2016-10-17"},{"serviceIdentifier":"W91376","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"RDG"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91376/2016-10-17"},{"serviceIdentifier":"W92205","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:50:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WOK"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92205/2016-10-17"},{"serviceIdentifier":"W94539","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T05:58:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WNR"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94539/2016-10-17"},{"serviceIdentifier":"Z03213","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T06:00:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03213/2016-10-17"},{"serviceIdentifier":"W93909","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:03:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Richmond & Kingston","circularRoute":true,"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93909/2016-10-17"},{"serviceIdentifier":"W96409","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:03:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Cobham","callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W96409/2016-10-17"},{"serviceIdentifier":"W93036","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:06:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"HMC"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93036/2016-10-17"},{"serviceIdentifier":"W96039","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:12:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"SHP"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W96039/2016-10-17"},{"serviceIdentifier":"W96722","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:12:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"BSM"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W96722/2016-10-17"},{"serviceIdentifier":"W94014","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:15:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"PMH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94014/2016-10-17"},{"serviceIdentifier":"W94190","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:15:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"WAT"}],"via":"via Richmond & Hounslow","circularRoute":true,"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W94190/2016-10-17"},{"serviceIdentifier":"W93532","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:16:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"CSS"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W93532/2016-10-17"},{"serviceIdentifier":"W91380","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"RDG"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W91380/2016-10-17"},{"serviceIdentifier":"W92208","serviceOperator":"SW","transportMode":"TRAIN","scheduledInfo":{"scheduledTime":"2016-10-17T06:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"GLD"}],"via":"via Woking ","callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/W92208/2016-10-17"},{"serviceIdentifier":"Z03214","serviceOperator":"*B","transportMode":"BUS","scheduledInfo":{"scheduledTime":"2016-10-17T06:20:00+01:00"},"callingType":"PickUp","destinationList":[{"crs":"XTH"}],"callingPatternUrl":"https://realtime.thetrainline.com/callingPattern/Z03214/2016-10-17"}]}

let callingPatternStub = {"isRealTimeDataAvailable":true,"service":{"serviceUid":"W93340","serviceOperator":"SW","transportMode":"TRAIN","serviceOrigins":["WAT"],"serviceDestinations":["STW"],"stops":[{"location":{"crs":"WAT"},"arrival":{"notApplicable":true},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:42:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:42:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"PickUp"},{"location":{"crs":"VXH"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T00:45:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T00:45:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:46:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:46:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"CLJ"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T00:50:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T00:50:00+01:00","realTimePlatform":"11","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:51:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:51:00+01:00","realTimePlatform":"11","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"WIM"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:04:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:01:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:05:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:05:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"RAY"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:07:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:08:00+01:00","realTimePlatform":"3","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:08:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:08:00+01:00","realTimePlatform":"3","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"NEM"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:11:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:11:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:11:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:11:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"NBT"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:14:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:14:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:14:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:14:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"KNG"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:17:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:17:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:17:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:17:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"HMW"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:22:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:22:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTimePlatform":"2"}}},"callingType":"SetDown"},{"location":{"crs":"TED"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:25:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:25:00+01:00","realTimePlatform":"1","realTimeFlag":"Estimate"}}},"departure":{"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTimePlatform":"1"}}},"callingType":"SetDown"},{"location":{"crs":"STW"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:28:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:28:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"notApplicable":true},"callingType":"SetDown"}]}}

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

function requestServiceDetails(callingPatternUrl) {
  return {
    type: REQUEST_SERVICE_DETAILS,
    url: callingPatternUrl
  }
}

function receiveServiceDetails(serviceDetail) {
  return {
    type: RECEIVE_SERVICE_DETAILS,
    service: serviceDetail,
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

export function fetchServiceDetails(callingPatternUrl){
  console.log('fetching service details', callingPatternUrl);
  return (dispatch) => {
    return setTimeout(() => {
      return dispatch(receiveServiceDetails(callingPatternStub.service))
    },0)
  }
}
