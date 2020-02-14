import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postData } from './Function';

const axios = require('axios');

class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUserId: 0,
      text: ''
    };
    this.textChange = this.textChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  selectUser(e) {
    this.setState({
      selectedUserId: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      message: this.state.text,
      user_id: this.props.currentUser.id,
      introduced_user_id: this.state.selectedUserId
    };
    postData(`${process.env.REACT_APP_API_URL}/api/v1/posts`, data);
    this.setState({
      text: ''
    });
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users`)
      .then((results) => {
        let users = results.data.data;
        for (let i in users) {
          if (users[i].id === this.props.currentUser.id) {
            users.splice(i, 1);
          }
        }
        this.setState({
          users: users,
          selectedUserId: users[0].id
        })
      })
      .catch((data) => {
        console.log(data)
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <textarea onChange={this.textChange} value={this.state.text} required></textarea>
        <select value={this.state.selectedUserId} onChange={this.selectUser}>
          {this.state.users.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <input id="postButton" type="submit" />
      </form>
    )
  }
}

export default connect((state) => state)(AddPostForm);