import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar'
import HomeScreen from './components/HomeScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar/>
        <HomeScreen/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
