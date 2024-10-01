/*import React from "react";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Clima_hoy } from './Clima_hoy';
import { Clima_cinco_dias } from './Clima_cinco_dias';
import { Navegacion } from './Navegacion';

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';

export function App() {
    return (    
        <Navegacion />
  )
}

export default App();*/
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { Clima_hoy } from './Clima_hoy';
import Clima_hoy from "./Clima_hoy";


export default function Profile() {
  return (
    <Clima_hoy />
  )
}