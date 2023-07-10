import { useEffect } from 'react';
import PropTypes from 'prop-types';
import imgURL from '../assets/Logo_of_Twitter.svg';

const TweetButton = ({data}) => {
  console.log('TweetButton', data);

  useEffect(() => {
    // window.twttr && window.twttr?.widgets?.load();
    console.log('TweetButton useEffect');
  }, [data]);

  return (
    <a className="twitter-share-button" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${data?.text}%20-%20${data?.author}&hashtags=FreeCodeCamp,randomQuoteMachine&url=`} target="_blank" rel="noreferrer" title="Tweet this!">
      <img src={imgURL} alt="Twitter logo" />
    </a>
    // window.twttr.widgets.load();
  )
}

TweetButton.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
}

export default TweetButton