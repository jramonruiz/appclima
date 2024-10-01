import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Clima_hoy from './Clima_hoy';
import Clima_cinco_dias from './Clima_cinco_dias';
import Clima_doce_horas from './Clima_doce_horas';
import Acerca_de from './Acerca_de';

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';

const RedirectToHome = () => {
    const history = useHistory();
  
    useEffect(() => {
      // Redirige a la página de inicio cuando se carga el componente
      history.push('/acerca_de');
    }, [history]);
  
    return null; // No renderiza nada
  };

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navbar-menu">
                        <li className="navbar-item"><Link to="/clima_hoy">Clima del dia hoy</Link></li>
                        <li className="navbar-item"><Link to="/clima_doce_horas">Clima siguiente doce horas</Link></li>
                        <li className="navbar-item"><Link to="/clima_cinco_dias">Clima de los proximos cinco dias</Link></li>
                        <li className="navbar-item"><Link to="/acerca_de">Acerca_de</Link></li>
                    </ul>
                </nav>

                <Switch>
                    {/* Redireccionar desde la raíz */}
                    <Route exact path="/" component={RedirectToHome} />
                    <Route path="/clima_hoy" component={Clima_hoy} />
                    <Route path="/clima_doce_horas" component={Clima_doce_horas} />
                    <Route path="/clima_cinco_dias" component={Clima_cinco_dias} />
                    <Route path="/acerca_de" component={Acerca_de} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;