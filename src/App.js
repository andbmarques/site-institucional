import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyles from './globalStyles'
import Home from './Pages/HomePage/Home';
import Pagina2 from './Pages/Pagina2/Pagina2'
import Pagina3 from './Pages/Pagina3/Pagina3'
import Pagina4 from './Pages/Pagina4/Pagina4'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      
       <Router>
          <GlobalStyles />
          
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            
            <Route path='/pagina2' exact component={Pagina2} />
            <Route path='/pagina3' exact component={Pagina3} />
            <Route path='/pagina4' exact component={Pagina4} />
            
          </Switch>
          <Footer />
       </Router>

    </div>
  );
}

export default App;
