require('style!css!less!./Service.less')

import React, { Component, PropTypes } from 'react'

export default class Service extends Component {
  render() {
    const { serviceInfo } = this.props
    const scheduledTime = new Date(serviceInfo.scheduledInfo.scheduledTime).getTime()
    const scheduledTimeInHours = new Date(serviceInfo.scheduledInfo.scheduledTime).getHours()
    const scheduledTimeInMinutes = new Date(serviceInfo.scheduledInfo.scheduledTime).getMinutes()

    return (
      <li className='com-service'>
        <a className='cd-service-link'>
          <div className='cd-service-station'>
            <span className='cd-time'>
              { (scheduledTimeInHours < 10 ? '0':'') +  scheduledTimeInHours }
              :
              { (scheduledTimeInMinutes < 10 ? '0':'') +  scheduledTimeInMinutes }
            </span>
            <span className='cd-destination'>
              { serviceInfo.destinationList[0].crs }
            </span>
            { serviceInfo.realTimeUpdatesInfo && serviceInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform ?
              <span className='cd-platform'>
                <span className='cd-title'>Plat.</span>
                <span className='cd-number'>
                  { serviceInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform }
                </span>
              </span>
              :
              <span className='cd-platform'>
                <span className='cd-number'> - </span>
              </span>
            }
          </div>
          <div className='cd-service-details'>
            <span className='cd-service-operator'>
              South West Trains
            </span>
            <span className='cd-service-time'>
              {
                serviceInfo.realTimeUpdatesInfo && (scheduledTime !== new Date(serviceInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTime).getTime()) ?
                <span className='cd-delay'>Delayed</span>
                :
                <span className='cd-ontime'>On time</span>
              }
            </span>
          </div>
          <div className='cd-icon'>
            <i className='fa fa-chevron-right'></i>
          </div>
        </a>
      </li>
    )
  }
}

Service.propTypes = {
  serviceInfo: PropTypes.shape({
      callingPatternUrl: PropTypes.string.isRequired,
      destinationList: PropTypes.arrayOf(
        PropTypes.shape({
          crs: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      scheduledInfo: PropTypes.shape({
        scheduledTime: PropTypes.string.isRequired
      }).isRequired,
      serviceOperator: PropTypes.string.isRequired
    }).isRequired
}
