import React, { Component, PropTypes } from 'react'

export default class Service extends Component {
  render() {
    const { serviceInfo } = this.props

    return (
      <div>
      { serviceInfo.serviceOperator }
      </div>
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
