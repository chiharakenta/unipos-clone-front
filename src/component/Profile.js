import React, { Component } from 'react';
import { connect } from 'react-redux';
const axios = require('axios');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      receivedPoint: 0
    };
  }

  componentWillMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.currentUser.id}`)
      .then((results) => {
        console.log(results)
        let user = results.data.data;
        this.setState({
          point: user.point,
          receivedPoint: user.received_point
        });
      })
  }

  render() {
    return (
      <div>
        <p>{this.props.currentUser.name}</p>
        <p>送れるポイント: {this.state.point}</p>
        <p>もらったポイント: {this.state.receivedPoint}</p>
      </div>
    );
  }
}

export default connect((state) => state)(Profile);
