require('style!css!less!./ServiceDetail.less')

import React, { Component, PropTypes } from 'react'
import CallingPoint from '../CallingPoint/CallingPoint'

export default class ServiceDetail extends Component {
  render() {
    const { serviceDetail } = this.props

    return (
      <div className='com-service-detail'>
        <div className='cd-header'>
          <span className='fa fa-train'></span>
          <h3 className='cd-title'>
            <div className='cd-origin'>
            { serviceDetail.serviceOrigins[0] }
            </div>
            <div className='cd-destination-info'>
              <span className='cd-to'>to</span>
              <span className='cd-destination'>
                { serviceDetail.serviceDestinations[0] }
              </span>
            </div>
            <div className='cd-operator'>
              Operated by South West Trains
            </div>
          </h3>
        </div>
        <ul className='cd-calling-points'>
          {serviceDetail.stops.map((stop, id) =>
            <CallingPoint callingPoint={stop} key={id}/>
          )}
        </ul>
      </div>
    )
  }
}

ServiceDetail.propTypes = {
  serviceDetail: PropTypes.shape({
      serviceDestinations: PropTypes.array.isRequired,
      serviceOperator: PropTypes.string.isRequired,
      serviceOrigins: PropTypes.array.isRequired,
      stops: PropTypes.array.isRequired
    }).isRequired
}
