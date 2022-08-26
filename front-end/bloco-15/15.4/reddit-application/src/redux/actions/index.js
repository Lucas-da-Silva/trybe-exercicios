import redditApi from '../../services/redditApi';

export const GET_SUBREDDIT = 'GET_SUBREDDIT';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';

const request = () => ({
  type: REQUEST,
});

const successRequest = (posts, nameSubreddit) => ({
  type: GET_SUBREDDIT,
  posts,
  nameSubreddit,
});

const errorRequest = (error) => ({
  type: ERROR,
  error,
});

export function fetchApi(subreddit) {
  return async (dispatch) => {
    dispatch(request());
    try {
      const data = await redditApi(subreddit);
      dispatch(successRequest(data, subreddit));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  }
}
