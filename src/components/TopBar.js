import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

export default class TopBar extends Component {
  render () {
    return (
      <AppBar
        title='Title'
        />
    )
  }
}

TopBar.propTypes = {
}
