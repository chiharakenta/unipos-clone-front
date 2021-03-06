import React, { Component } from 'react';
import { signIn, signOut } from '../store/Store';
import { connect } from 'react-redux';
import { postData } from './Function';
const axios = require('axios');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: null
    };
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email"
      })
    });
  }

  renderAuth() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know your google account</div>
    } else if (this.state.isSignedIn) {
      return <div>login with google!!</div>
    } else {
      return <div>I can not see your google account!!</div>
    }
  }

  loginWithGoogle = () => {
    window.gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        let userProfile = auth.currentUser.get().getBasicProfile();
        let newUserData = {
          google_id: userProfile.dV,
          name: userProfile.Ad
        };
        axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users`, newUserData)
          .then((results) => {
            let user = results.data.data;
            postData(`${process.env.REACT_APP_API_URL}/api/v1/points`, { user_id: user.id } );
            postData(`${process.env.REACT_APP_API_URL}/api/v1/received_points`, { user_id: user.id } );
            let action = signIn(user);
            this.props.dispatch(action);
            window.location.href = '/';
          })
          .catch((data) => {
            console.log(data);
          })
      });
  }

  logoutFromGoogle = () => {
    window.gapi.auth2.getAuthInstance().signOut()
      .then(() => {
        let action = signOut();
        this.props.dispatch(action);
      });
  }

  render() {
    return (
      <div>
        {this.renderAuth()}
        <button onClick={this.loginWithGoogle}>
          login with google
        </button>
        <button onClick={this.logoutFromGoogle}>
          logout from google
        </button>
      </div>
    );
  }
}

export default connect((state) => state)(Login);