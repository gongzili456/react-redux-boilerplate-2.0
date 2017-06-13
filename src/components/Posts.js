import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

export default class Posts extends Component {
  render () {
    return (
      <List>
        {this.postListRender()}
      </List>
    )
  }

  postListRender () {
    return this.props.posts.map((post, i) =>
      <a href={post.url} key={i}>
        <ListItem
          leftAvatar={<Avatar src={post.thumbnail} />}
          primaryText={post.title}
          secondaryText={post.selftext_html}
          />
      </a>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
