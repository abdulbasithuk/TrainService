require('./DepartureBoard.less')

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
            <div className='col-xs-12 col-sm-6 col-md-6'>
              {services.map((service, id) =>
                <Service serviceInfo={service} key={id}></Service>)
              }
            </div>
            <div className='col-xs-12 col-sm-6 col-md-6'>
              {services.map((service, id) =>
                <Service serviceInfo={service} key={id}></Service>)
              }
            </div>
          </div>
      </div>
    )
  }
}

DepartureBoard.propTypes = {
  services: PropTypes.array.isRequired
}
