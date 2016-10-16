require('style!css!less!./DepartureBoard.less')

import React, { Component, PropTypes } from 'react'
import Service from '../Service/Service'

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
                <Service serviceInfo={service} key={id}></Service>)
              }
              </ul>
            </div>
            <div className='cd-services-container col-xs-6 col-sm-3 col-md-3 col-md-offset-3'>
              <ul className='cd-services'>
              {services.map((service, id) =>
                <Service serviceInfo={service} key={id}></Service>)
              }
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

DepartureBoard.propTypes = {
  services: PropTypes.array.isRequired
}
