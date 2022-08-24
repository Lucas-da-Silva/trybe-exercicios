const createUrl = (subreddit) => `https://www.reddit.com/r/${subreddit}.json`;  

const requestRedditApi = async (subreddit) => {
  const url = createUrl(subreddit);
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default requestRedditApi;
