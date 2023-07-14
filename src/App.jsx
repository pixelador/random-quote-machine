import { useState, useEffect } from 'react'
import QuoteBox from './components/QuoteBox';
import './App.scss'

const URL = "https://type.fit/api/quotes"

const App = () => {
  
  const [quoteData, setQuoteData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const getRandomIndex = (length) => Math.floor(Math.random() * length);

  const bgColors = [
    'lightcoral',
    'lightblue',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightsteelblue',
  ];
  
  const handleNewQuoteClick = () => {
    // Updating dataIndex will trigger a re-render of QuoteBox
    setDataIndex(getRandomIndex(dataLength));
    console.log('handleNewQuoteClick dataIndex', dataIndex);
  };

  useEffect(() => {
    setDataIndex(getRandomIndex(dataLength));
  }, [dataLength]);

  useEffect(() => {
    // Fetch data from API on initial component mount only
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setQuoteData(data);
        setDataLength(data.length);
        setLoaded(true);
        console.log('fetchData data', data);
      }
      catch(err) {
        console.error(err);
      }
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {console.log('app state: index, lenght, loaded ', dataIndex, dataLength, loaded)}
    {loaded && <QuoteBox data={quoteData[dataIndex]} callback={handleNewQuoteClick} bgColor={bgColors[getRandomIndex(bgColors.length)]} />}
    </>
  );
};

export default App
