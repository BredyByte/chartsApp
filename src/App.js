import { useSelector } from 'react-redux';
import DiagramsContainer from './components/DiagramsContainer';
import CustomStepper from './components/Stepper';
import Loader from './components/Loader';

import './App.css';
function App() {
  const state = useSelector(state => state);
  return (
    <div className="App">
      {(state.bitcoin.loading || state.user.loading) && <Loader/>}
      <CustomStepper/>
    </div>
  );
}

export default App;
