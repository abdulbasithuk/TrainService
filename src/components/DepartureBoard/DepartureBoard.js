require('style!css!less!./DepartureBoard.less')

import React, { Component, PropTypes } from 'react'
import Service from '../Service/Service'
import ServiceDetail from '../ServiceDetail/ServiceDetail'

export default class DepartureBoard extends Component {

  render() {
    const { services, serviceDetail } = this.props

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
                service.transportMode === 'TRAIN'? <Service serviceInfo={service} key={id} onClick={this.props.onClick}/>:''
              )}
              </ul>
            </div>
            <div className='cd-service-detail-container col-xs-6 col-sm-3 col-md-3 col-md-offset-3'>
              { Object.keys(serviceDetail).length !== 0 ?
                  <ServiceDetail serviceDetail={serviceDetail}/> : ''
              }
            </div>
          </div>
      </div>
    )
  }
}

DepartureBoard.propTypes = {
  services: PropTypes.array.isRequired,
  serviceDetail: PropTypes.object
}
