import PropTypes from 'prop-types';

const QuoteBox = ({data}) => {
  console.log('QuoteBox', data);
  
  return (
    <>
      <h1 id="text">
        &quot;{data?.text}&quot;
      </h1>
      <h4 id="author">&mdash;&nbsp;{data?.author}</h4>
    </>
  )
};

QuoteBox.propTypes = {
  data: PropTypes.object,
}

export default QuoteBox