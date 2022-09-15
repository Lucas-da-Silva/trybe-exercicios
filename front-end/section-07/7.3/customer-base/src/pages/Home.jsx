import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
};

export default connect(null, null)(Home);
