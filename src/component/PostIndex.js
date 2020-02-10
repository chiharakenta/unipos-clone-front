import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeletePostButton from './DeletePostButton';

class PostIndex extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map((post) => (
            <li>
              {post.message} <DeletePostButton id={post.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(PostIndex);;