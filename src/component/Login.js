import React, { Component } from 'react';
import { signIn } from '../store/Store';
import { connect } from 'react-redux';

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
        let action = signIn(auth.isSignedIn.get());
        this.props.dispatch(action);
        window.location.href = '/'
      });
  }

  logoutFromGoogle = () => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(() => {
      const auth = window.gapi.auth2.getAuthInstance();
      let action = signIn(auth.isSignedIn.get());
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