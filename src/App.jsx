import { useState, useEffect } from 'react'
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import './App.css'
import TweetButton from './components/TweetButton';

const URL = "https://type.fit/api/quotes"

const App = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  
  useEffect(() => {
    // Fetch data from API on initial component mount only
    const fetchData = async () => {
      const output = await fetch(URL);
      const data = await output.json();
      console.log('App data', data);
      setQuoteData(data);
      setDataLength(data.length);
      setDataIndex(Math.floor(Math.random() * dataLength));
    }

    fetchData()
    // .then(
    //   window.twttr.widgets.createShareButton(
    //     "https://dev.twitter.com/web/tweet-button",
    //     document.getElementById("tweet-quote"),
    //     {
    //       size: "large",
    //       text: `theQuote`,
    //       hashtags: "freeCodeCamp,randomeQuoteMachine",
    //     }
    //   )
    // )
    .catch(console.error);


  }, [dataLength]);

  // const handleTweetClick = () => {
  //   console.log('Tweet button clicked');
  // };

  const handleNewQuoteClick = () => {
    // Updating dataIndex will trigger a re-render of QuoteBox
    setDataIndex(Math.floor(Math.random() * dataLength));
  };

  return (
    <>
    {
    <div id="quote-box">
      <QuoteBox data={quoteData[dataIndex]}/>
      <div className="buttonCol">
        <Button id="new-quote" onClick={handleNewQuoteClick} text="New Quote"/>
        <TweetButton data={quoteData[dataIndex]}/>
      </div>
    </div>
    }
    </>
  );
};

export default App
