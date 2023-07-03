import PropTypes from 'prop-types';

const TweetButton = ({data}) => {
  return (
    <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${data.text}%20-%20${data.author}&hashtags=FreeCodeCamp,randomQuoteMachine`} data-size="large">Tweet</a>
  )
}

TweetButton.propTypes = {
  data: PropTypes.object,
}

export default TweetButton