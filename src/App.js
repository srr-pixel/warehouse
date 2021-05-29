
import './App.css';
import Nav from './Nav'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import { Route, Link} from 'react-router-dom'
import JSONDATA from './warehouses.json'


function App() {
  
  return (
    <div className="App">
      <Nav />
       <div className="banner">
          <Route exact path="/Firstpage" component={Firstpage} />
          <Route exact path="/Secondpage" component={Secondpage} />
        </div>
        
      
    </div>
  );
}

export default App;
