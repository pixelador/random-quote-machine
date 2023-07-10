import PropTypes from 'prop-types';
import TweetButton from './TweetButton';
import Button from './Button';

const QuoteBox = ({data, callback}) => {
  console.log('QuoteBox', data);
  
  return (
    <>
      <div id="quote-box">
        <div className="quoteWrapper">
          <span className='quoteMark'>&quot;</span>
          <div className="quoteContainer">
            <h1 id="text">
              {data?.text}
            </h1>
           { (data?.author) ? <h4 id="author">&mdash;&nbsp;{data?.author}</h4> : ''}
          </div>
          <span className='quoteMark'>&quot;</span>
        </div>
        <div className="buttonRow">
          <TweetButton data={data}/>
          <Button id="new-quote" onClick={callback} text="New Quote"/>
      </div>
      </div>

    </>
  )
};

QuoteBox.propTypes = {
  data: PropTypes.object,
  callback: PropTypes.func,
}

export default QuoteBox