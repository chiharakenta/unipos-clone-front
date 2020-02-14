import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postData } from './Function';
import { clap } from '../store/Store';


class Clap extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let data = {
      post_id: this.props.postId
    };
    postData(`${process.env.REACT_APP_API_URL}/api/v1/claps`, data);
    let action = clap(this.props.postId);
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>拍手する</button>{this.props.claps}
      </div>
    )
  }
}

export default connect((state) => state)(Clap);