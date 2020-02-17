import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPoint } from '../store/Store';
const axios = require('axios');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      receivedPoint: 0
    };
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.currentUser.id}`)
      .then((results) => {
        console.log(results)
        let user = results.data.data;
        let action = setPoint(user);
        this.props.dispatch(action);
      })
  }

  render() {
    return (
      <div>
        <p>{this.props.currentUser.name}</p>
        <p>送れるポイント: {this.props.currentUser.point}</p>
        <p>もらったポイント: {this.props.currentUser.received_point}</p>
      </div>
    );
  }
}

export default connect((state) => state)(Profile);
