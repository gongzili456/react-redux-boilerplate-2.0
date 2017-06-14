import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'

let currentIndex = 0
var generateItem = function () {
  var chooseCat = Math.floor(Math.random() * 2)
  var ind = (currentIndex % 10) + 1
  var newImage = (chooseCat)
    ? `http://lorempixel.com/output/cats-q-c-640-480-${ind}.jpg`
    : `http://lorempixel.com/output/technics-q-c-640-480-${ind}.jpg`
  currentIndex++
  return newImage
}

class InfiniteScroll extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      items: [
        'http://lorempixel.com/output/cats-q-c-640-480-9.jpg',
        'http://lorempixel.com/output/cats-q-c-640-480-10.jpg',
        'http://lorempixel.com/output/technics-q-c-640-480-10.jpg'
      ]
    }
  }

  _loadMoreItems = () => {
    console.log('onEnter _loadMoreItems')
    this.setState({
      isLoading: true
    })

    setTimeout(function () {
      const currentItems = this.state.items
      console.log('currentItems : ', currentItems, this.state)
      for (var i = 0; i < 3; i++) {
        currentItems.push(generateItem())
      }
      this.setState({
        isLoading: false,
        items: currentItems
      })
    }.bind(this), 1000)
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    return (
      <div style={{
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll'
      }}>
        {this._renderItems()}
        <div style={{height: '100px'}}>
          {this._renderWaypoint()}
          Loading more items.....
        </div>
      </div>
    )
  }

  _renderItems () {
    return this.state.items.map((url, index) => {
      return (
        <img
          src={url}
          alt='CATS AND ROBOTS... '
          style={{ height: 480 }}
          key={index}
          />
      )
    })
  }

  _renderWaypoint = () => {
    if (!this.state.isLoading) {
      return (
        <Waypoint
          onEnter={this._loadMoreItems}
          onLeave={this._handleLeave}
        />
      )
    }
  }

  _handleLeave () {
    console.log('onLeave')
  }
}

InfiniteScroll.propTypes = {
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
}

export default InfiniteScroll
