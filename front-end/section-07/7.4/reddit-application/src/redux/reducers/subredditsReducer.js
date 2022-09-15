import { ERROR, GET_SUBREDDIT, REQUEST } from '../actions';

const INITIAL_STATE = {
  posts: { data: { children: { } } },
  nameSubreddit: '',
  isFetching: false,
  error: null,
};

const subredditsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GET_SUBREDDIT:
      return {
        ...state,
        posts: action.posts,
        nameSubreddit: action.nameSubreddit,
        isFetching: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default subredditsReducer;
