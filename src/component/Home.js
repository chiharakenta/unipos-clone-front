import React, { Component } from 'react';
import AddPostForm from './AddPostForm';
import DeletePostButton from './DeletePostButton';
import { connect } from 'react-redux';
import { readPosts } from '../store/Store';
import { googleSignInCheck } from './Function';

const axios = require('axios');

class Home extends Component {
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/posts`)
      .then((results) => {
        console.log(results);
        let action = readPosts(results.data.data);
        this.props.dispatch(action);
      })
      .catch((data) => {
        console.log(data)
      })
  }


  render() {
    googleSignInCheck();
    return (
      <div>
        <AddPostForm />
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id}>
              {post.message} <DeletePostButton id={post.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(Home);;
