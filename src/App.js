import './App.css';
import {
  Header,
  About,
  Portfolio,
  Contact,
} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
