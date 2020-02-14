import React, { Component } from 'react';
import AddPostForm from './AddPostForm';
import Profile from './Profile';
import Clap from './Clap';
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
        <Profile />
        <AddPostForm />
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id}>
              <p>{post.introducing_user_name} → {post.introduced_user_name}</p>
              <p>{post.message}</p>
              <Clap postId={post.id} claps={post.claps} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(Home);
