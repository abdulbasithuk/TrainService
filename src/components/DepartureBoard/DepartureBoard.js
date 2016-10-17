require('style!css!less!./DepartureBoard.less')

import React, { Component, PropTypes } from 'react'
import Service from '../Service/Service'
import ServiceDetail from '../ServiceDetail/ServiceDetail'

let callingPatternStub = {"isRealTimeDataAvailable":true,"service":{"serviceUid":"W93340","serviceOperator":"SW","transportMode":"TRAIN","serviceOrigins":["WAT"],"serviceDestinations":["STW"],"stops":[{"location":{"crs":"WAT"},"arrival":{"notApplicable":true},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:42:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:42:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"PickUp"},{"location":{"crs":"VXH"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T00:45:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T00:45:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:46:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:46:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"CLJ"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T00:50:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T00:50:00+01:00","realTimePlatform":"11","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T00:51:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T00:51:00+01:00","realTimePlatform":"11","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"WIM"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:04:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:01:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:05:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:05:00+01:00","realTimePlatform":"8","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"RAY"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:07:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:08:00+01:00","realTimePlatform":"3","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:08:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:08:00+01:00","realTimePlatform":"3","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"NEM"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:11:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:11:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:11:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:11:00+01:00","realTimePlatform":"4","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"NBT"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:14:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:14:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:14:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:14:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"KNG"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:17:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:17:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"scheduled":{"scheduledTime":"2016-10-17T01:17:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTime":"2016-10-17T01:17:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"callingType":"Normal"},{"location":{"crs":"HMW"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:22:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:22:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTimePlatform":"2"}}},"callingType":"SetDown"},{"location":{"crs":"TED"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:25:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:25:00+01:00","realTimePlatform":"1","realTimeFlag":"Estimate"}}},"departure":{"realTime":{"realTimeServiceInfo":{"hasDeparted":false,"realTimePlatform":"1"}}},"callingType":"SetDown"},{"location":{"crs":"STW"},"arrival":{"scheduled":{"scheduledTime":"2016-10-17T01:28:00+01:00"},"realTime":{"realTimeServiceInfo":{"hasArrived":false,"realTime":"2016-10-17T01:28:00+01:00","realTimePlatform":"2","realTimeFlag":"Estimate"}}},"departure":{"notApplicable":true},"callingType":"SetDown"}]}}

export default class DepartureBoard extends Component {
  render() {
    const { services } = this.props

    return (
      <div className='com-departure-board'>
          <div className='cd-header'>
            <h1>
              <i className='fa fa-clock-o'></i>
              Departures from London Waterloo
            </h1>
          </div>
          <div className='cd-body row'>
            <div className='cd-services-container col-xs-6 col-sm-3 col-md-3'>
              <ul className='cd-services'>
              {services.map((service, id) =>
                service.transportMode === 'TRAIN'? <Service serviceInfo={service} key={id} />:''
              )}
              </ul>
            </div>
            <div className='cd-service-detail-container col-xs-6 col-sm-3 col-md-3 col-md-offset-3'>
              <ServiceDetail serviceDetail={callingPatternStub.service}/>
            </div>
          </div>
      </div>
    )
  }
}

DepartureBoard.propTypes = {
  services: PropTypes.array.isRequired
}
