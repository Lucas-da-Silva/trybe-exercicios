import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';

class Header extends Component {
  state = {
    hour: null,
    subredditSearched: '',
  }
  
  getHour() {
    const date = new Date();
    const hour =  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return hour
  }

  handleChange = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(fetchApi(value));
    this.setState({ hour: this.getHour(), subredditSearched: value });
  }

  render() {
    const { nameSubreddit } = this.props;
    const { hour, subredditSearched } = this.state;

    return (
      <section>
        <h1>Selected: {nameSubreddit}</h1>
        <form>
            <select onChange={ this.handleChange } name="selected-post">
            <option value="reactjs">reactjs</option>
            <option value="frontend">frontend</option>
          </select>
          {
            hour && <p>Last update at {hour}.</p>
          }
          {
            subredditSearched && (
              <button 
                onClick={ this.handleChange }
                value={ subredditSearched }
              >
                Refresh
              </button>
            )
          }
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  nameSubreddit: state.subreddits.nameSubreddit
});

export default connect(mapStateToProps)(Header);
