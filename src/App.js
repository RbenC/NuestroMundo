import '../src/css/normalize.css'; 
import '../src/css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NombreSitio from "./components/NombreSitio";
import NavBar from './components/NavBar';

import Home from './Home';
import CountriesGrid from './containers/CountriesGrid';
import Pais from './containers/Pais';
import Galeria from './containers/Galeria';
import Contacto from './containers/Contacto';
import { Login } from './containers/login/Login';
import  PrivateRoute  from "./components/privateRoute/PrivateRoute"
import Rusia from './containers/paisesmasgrandes/Rusia';
import Canada from './containers/paisesmasgrandes/Canada';
import Usa from './containers/paisesmasgrandes/Usa';
import Blog from './containers/Blog';
import Entrada from './containers/Entrada';
import Entradados from './containers/Entradados';


import { useSelector } from 'react-redux';

function App() {
	const isLogin = useSelector(state => state.login.success)
  return (
    <div>
      <NombreSitio/>
      <Router>
				<NavBar />        
				<Switch>
					<Route path="/login" >
						<Login />
					</Route>

					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/paises" >
						<CountriesGrid />
					</Route>

					<Route path="/rusia" >
						<Rusia  country= {"Russian Federation"}/>
					</Route>
					<Route path="/canada" >
						<Canada country={"Canada"}/>
					</Route>
					<Route path="/usa" >
						<Usa country={"United States of America"} />
					</Route>
					<Route path="/blog" >
						<Blog />
					</Route>
					<Route path="/entrada" >
						<Entrada />
					</Route>
					<Route path="/entradados" >
						<Entradados />
					</Route>
					
					
					<PrivateRoute path="/pais" isLogin={isLogin} component={Pais}  exact/>
					
					<Route path="/galeria" >
						<Galeria />
					</Route>

					<PrivateRoute path="/contacto" isLogin={isLogin} component={Contacto}  exact/>


				</Switch>
			</Router>
      

    </div>
  );
}

export default App;
