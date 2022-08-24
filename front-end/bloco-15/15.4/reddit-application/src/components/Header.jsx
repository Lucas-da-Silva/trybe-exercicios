import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';

class Header extends Component {
  handleChange = (e) => {
    const { dispatch } = this.props;
    const { value } = e.target;

    dispatch(fetchApi(value));
  }

  render() {
    const { stateTotal } = this.props; 
    console.log(stateTotal);
    return (
      <section>
        <h1>Selected:</h1>
        <select onChange={ this.handleChange } name="selected-post">
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  stateTotal: state
});

export default connect(mapStateToProps)(Header);
