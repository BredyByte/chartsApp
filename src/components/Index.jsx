import { useDispatch, useSelector } from 'react-redux'
import { GET_DATA } from '../redux/types';
import { useEffect } from 'react'
import DiagramsContainer from '../components/DiagramsContainer';
import TopBar from '../components/TopBar';
import Loader from '../components/Loader';
import Footer from './Footer'

const Index = () => {
  const state = useSelector(state => state);
  const isLoading = useSelector(state => state.bitcoin.loading);
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

  if(state.bitcoin.loading || state.user.loading) {
    return <Loader/>
  } else {
    return (
      <div className="Index" style={{ minHeight: "100vh", position: "relative" }}>
        <TopBar/>
        <DiagramsContainer data={state} />
        <Footer/>
      </div>
    )
  }
}

export default Index
