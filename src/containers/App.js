import React, {
  Component
} from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import baseTheme from '../myTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Reddit from './Reddit'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  // for material-ui
  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={this.props.history}>
          <div style={{height: '100%'}}>
            <Route exact path='/' component={Reddit} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// for material-ui
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default App
