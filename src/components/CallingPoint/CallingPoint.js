require('style!css!less!./CallingPoint.less')

import React, { Component, PropTypes } from 'react'

export default class CallingPoint extends Component {
  render() {
    const { callingPoint } = this.props
    const arrivalTime = callingPoint.arrival.notApplicable ? new Date(callingPoint.departure.realTime.realTimeServiceInfo.realTime): new Date(callingPoint.arrival.realTime.realTimeServiceInfo.realTime)
    const arrivalTimeInHours = arrivalTime.getHours()
    const arrivalTimeInMinutes = arrivalTime.getMinutes()
    const departureTime = callingPoint.departure.realTime &&  !callingPoint.departure.notApplicable ? new Date(callingPoint.departure.realTime.realTimeServiceInfo.realTime): new Date(callingPoint.arrival.scheduled.scheduledTime)
    const departureTimeInHours = departureTime.getHours()
    const departureTimeInMinutes = departureTime.getMinutes()
    const hasDeparted = callingPoint.departure.notApplicable ? false : callingPoint.departure.realTime.realTimeServiceInfo.hasDeparted;
    return (
      <li className='com-calling-point'>
        <div className='cd-time'>
          { (arrivalTimeInHours < 10 ? '0':'') +  arrivalTimeInHours }
          :
          { (arrivalTimeInMinutes < 10 ? '0':'') +  arrivalTimeInMinutes }
        </div>
        <div className='cd-train-line'>
          <div className='cd-train-line-point'></div>
        </div>
        <div className='cd-container'>
          <div className='cd-station-name'>
            {
              callingPoint.location.crs
            }
          </div>

          <div className='cd-status'>
            { !hasDeparted ?
              (callingPoint.arrival.notApplicable || (arrivalTime.getTime() === new Date(callingPoint.arrival.scheduled.scheduledTime).getTime()) ?
                <span>On time</span>
                :
                <span> Exp. { (departureTimeInHours < 10 ? '0':'') +  departureTimeInHours }:{ (departureTimeInMinutes < 10 ? '0':'') +  departureTimeInMinutes } </span>
              ) :
              <span> Dept. { (departureTimeInHours < 10 ? '0':'') +  departureTimeInHours }:{ (departureTimeInMinutes < 10 ? '0':'') +  departureTimeInMinutes } </span>
            }
          </div>
        </div>
      </li>
    )
  }
}

CallingPoint.propTypes = {
  callingPoint: PropTypes.shape({
    arrival: PropTypes.object.isRequired,
    departure: PropTypes.object.isRequired,
    location: PropTypes.shape({
      crs: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
