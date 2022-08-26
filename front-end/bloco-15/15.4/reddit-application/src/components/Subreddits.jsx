import React, { Component } from 'react';
import { connect } from 'react-redux';

class Subreddits extends Component {
  render() {
    const { subreddits } = this.props;

    return (
      <section>
        <ul>
          { subreddits.length && subreddits.map(({ data: { title } }) => (
            <li>{title}</li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  subreddits: state.subreddits.posts.data.children,
});

export default connect(mapStateToProps, null)(Subreddits);
