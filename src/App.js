import{
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Config from './components/Config';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokedexInfo from './components/PokedexInfo';
import ProtectedRoutes from './components/ProtectedRoutes';
import './styles/style.css';

function App() {
  

  return (
    <HashRouter>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/:id" element={<PokedexInfo/>}/>
            <Route path="/pokedex/config" element={<Config/>}/>
          </Route>

        </Routes>
      </div>
    </HashRouter>
      
  );
}

export default App;
