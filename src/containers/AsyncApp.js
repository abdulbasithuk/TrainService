import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../actions'
import DepartureBoard from '../components/DepartureBoard/DepartureBoard'

class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchServices())
  }

  render() {
    const { services } = this.props
    return (
      <div>
        <DepartureBoard services={services}/>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  services: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { getDepartureServices } = state

  return {
    services: getDepartureServices.items
  }
}

export default connect(mapStateToProps)(AsyncApp)
