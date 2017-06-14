import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import InfiniteScroll from '../components/InfiniteScroll'

class ScrollTest extends Component {
  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    return (
      <div>
        <InfiniteScroll />
      </div>
    )
  }
}

ScrollTest.propTypes = {
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(ScrollTest)
