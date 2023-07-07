import PropTypes from 'prop-types';
import TweetButton from './TweetButton';
import Button from './Button';

const QuoteBox = ({data, callback}) => {
  console.log('QuoteBox', data);
  
  return (
    <>
      <div id="quote-box">
        <h1 id="text">
          &quot;{data?.text}&quot;
        </h1>
        <h4 id="author">&mdash;&nbsp;{data?.author}</h4>
      </div>
      <div className="buttonRow">
        <TweetButton data={data}/>
        <Button id="new-quote" onClick={callback} text="New Quote"/>
      </div>
    </>
  )
};

QuoteBox.propTypes = {
  data: PropTypes.object,
  callback: PropTypes.func,
}

export default QuoteBox