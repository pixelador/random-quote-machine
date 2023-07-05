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

  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  
  useEffect(() => {
    // Fetch data from API on initial component mount only
    const fetchData = async () => {
      const output = await fetch(URL);
      const data = await output.json();
      console.log('App data', data);
      setQuoteData(data);
      setDataLength(data.length);
      setDataIndex(getRandomIndex(dataLength));
    }

    fetchData()
    .catch(console.error);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewQuoteClick = () => {
    // Updating dataIndex will trigger a re-render of QuoteBox
    setDataIndex(getRandomIndex(dataLength));
  };

  return (
    <>
    {
    <div id="quote-box">
      <QuoteBox data={quoteData[dataIndex]}/>
      <div className="buttonCol">
        <Button id="new-quote" onClick={handleNewQuoteClick} text="New Quote"/>
        {/* <TweetButton data={quoteData[dataIndex]}/> */}
      </div>
    </div>
    }
    </>
  );
};

export default App
