export const GET_SUBREDDIT = 'GET_SUBREDDIT';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';

const request = () => ({
  type: REQUEST,
});

const successRequest = (posts) => ({
  type: GET_SUBREDDIT,
  posts,
});

const errorRequest = (error) => ({
  type: ERROR,
  error,
});

export function fetchApi(subreddit) {
  return async (dispatch) => {
    dispatch(request());
    try {
      const url = `https://www.reddit.com/r/${subreddit}.json`;
      const response = await fetch(url);
      const data = response.json();
      dispatch(successRequest(data));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  }
}
