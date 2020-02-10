import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../store/Store';
const axios = require('axios');

class DeletePostButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/posts/${e.target.id}`).then((response) => {
        this.props.dispatch(deletePost(response.data.data))
      }).catch((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <button id={this.props.id} onClick={this.handleClick}>この投稿を削除</button>
    )
  }
}
export default connect((state) => state)(DeletePostButton);;
