import { GET_DATA } from './redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import DiagramsContainer from './components/DiagramsContainer';
import Loader from './components/Loader';

import './App.css';


function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch({
    type: GET_DATA,
    payload: {
      bitcoin: {
        api: "https://financialmodelingprep.com/api/v3/historical-chart/1min/AAPL?apikey=eac2a5a15a21abfd4e60020fb2224475&limit=120",
      },
      user: {
        api: "./userData.json",
        label: "Users Gain",
      }
    }
  })
}, [dispatch]);
  return (
    <div className="App">
      <DiagramsContainer data={state} />
    </div>
  );
}

export default App;
