import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchServices,fetchServiceDetails } from '../actions'
import DepartureBoard from '../components/DepartureBoard/DepartureBoard'

class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchServices())
  }

  onClick(callingPatternUrl){
    const { dispatch } = this.props
    dispatch(fetchServiceDetails(callingPatternUrl))
  }

  render() {
    const { services, serviceDetail } = this.props
    return (
      <div>
        <DepartureBoard services={services} serviceDetail={serviceDetail} onClick={this.onClick.bind(this)}/>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  services: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { getDepartureServices, getServiceDetail } = state

  return {
    services: getDepartureServices.items,
    serviceDetail: getServiceDetail.service
  }
}

export default connect(mapStateToProps)(AsyncApp)
