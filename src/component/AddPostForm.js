import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postData } from './Function';


class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.textChange = this.textChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    postData(`${process.env.REACT_APP_API_URL}/api/v1/posts`, { user_id: this.props.currentUser.id, message: this.state.text });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.textChange} value={this.state.text} required></textarea>
        <input id="postButton" type="submit" />
      </form>
    )
  }
}

export default connect((state) => state)(AddPostForm);