import './App.css'
import { ListOfGifs } from './pages/SearchResults/ListOfGifs'
import { Route } from 'wouter'
import Details from './pages/Details/Details';
import Home from './pages/Home/Home'

// Link -> No recarge la pagina

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <div className='Gif-lin'>
          <Home />
        </div>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        <Route path='/gif/:id' component={Details} />
      </section>
    </div>
  );
}

export default App;
