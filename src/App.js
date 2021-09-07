import '../src/css/normalize.css'; 
import '../src/css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NombreSitio from "./components/NombreSitio";
import NavBar from './components/NavBar';


import Home from './Home';
import Paises from './containers/Paises';
import Pais from './containers/Pais';
import Galeria from './containers/Galeria';
import Contacto from './containers/Contacto';

function App() {
  return (
    <div>
      <NombreSitio/>
      <Router>
				<NavBar />        
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/paises" >
						<Paises />
					</Route>
					<Route path="/pais" >
						<Pais />
					</Route>
					<Route path="/galeria" >
						<Galeria />
					</Route>
					<Route path="/contacto" >
						<Contacto />
					</Route>
				
					

					
					
				</Switch>
			</Router>
      

    </div>
  );
}

export default App;
