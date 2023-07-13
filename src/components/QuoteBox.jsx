import PropTypes from 'prop-types';
import imgURL from '../assets/Logo_of_Twitter.svg';

const QuoteBox = ({data, callback, bgColor}) => {
  console.log('QuoteBox', data);
  
  return (
    <>
      <div id="quote-box" style={{backgroundColor:`${bgColor}`}}>
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
          <a className="twitter-share-button" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${data?.text}%20-%20${data?.author}&hashtags=freeCodeCamp,randomQuoteMachine&url=`} target="_blank" rel="noreferrer" title="Tweet this!">
            <img src={imgURL} alt="Twitter logo" />
          </a>
          <button id="new-quote" type="button" onClick={callback}>
            New Quote
          </button>
        </div>
      </div>
    </>
  )
};

QuoteBox.propTypes = {
  data: PropTypes.object,
  callback: PropTypes.func,
  bgColor: PropTypes.string,
}

export default QuoteBox